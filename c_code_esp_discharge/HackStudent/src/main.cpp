#include "main.h"

void setup() {
    serial_init();
	wifi_init();
	ntp_init();
    powerpin_init();
    print_info();
}

void loop() {
  // listen for incoming clients
  WiFiClient client = server.available();
  if (client) 
  {
    Serial.println("New client");
    memset(linebuf,0,sizeof(linebuf));
    charcount=0;
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) 
    {
      if (client.available()) 
      {
        char c = client.read();
        Serial.write(c);
        //read char by char HTTP request
        linebuf[charcount]=c;
        if (charcount<sizeof(linebuf)-1) charcount++;
 
        if (c == '\n' && currentLineIsBlank) 
        {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // the connection will be closed after completion of the response
          client.println();
          client.println("<!DOCTYPE HTML><html><head>");
          client.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"></head>");
          client.println("<h1>BUZZ SOMEONE</h1>");
          client.println("<p><a href=\"on\"><button>BUZZ</button></a></p>");
          client.println("</html>");
          break;
        }
        if (c == '\n') 
        {
          // you're starting a new line
          currentLineIsBlank = true;
          if (strstr(linebuf,"GET /on") > 0)
          {
            Serial.println("LED ON");
            buzz();
          }
 
          // you're starting a new line
          currentLineIsBlank = true;
          memset(linebuf,0,sizeof(linebuf));
          charcount=0;
        } 
        else if (c != '\r') 
        {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }
    // give the web browser time to receive the data
    delay(1);
 
    // close the connection:
    client.stop();
    Serial.println("client disconnected");
  }
}

// initialize serial connection
void serial_init() {
	Serial.begin(115200);
	Serial.setDebugOutput(true);
	Serial.println();
	Serial.println();
	Serial.println("serial_init");
}

// initialize WiFi connection
void wifi_init() {
	// set WiFi in station mode
	WiFi.mode(WIFI_STA);
	
	// connect to WiFi
	WiFi.begin(wifi_ssid, wifi_password);

	Serial.print("connect_to_wifi     ");

	// check if connected
	while (WiFi.waitForConnectResult() != WL_CONNECTED) {
		Serial.println("failed");
		Serial.println("esp_restart");	
		Serial.println();
		delay(3000);
		ESP.restart();
	}

	Serial.println("success");

    // begin web server
    Serial.println("begin_web_server");
    server.begin();
}

// initialize the NTP client
void ntp_init() {
	ntp_client.begin();
	ntp_client.update();
}

void powerpin_init() {
    pinMode(POWERPIN, OUTPUT);
    digitalWrite(POWERPIN, LOW);
}

void print_info() {
	Serial.println();

	Serial.print("mac_address         ");
	Serial.println(WiFi.macAddress());

	Serial.print("local_ip_address    ");
	Serial.println(WiFi.localIP());

	ntp_client.update();
	Serial.print("ntp_utc_time        ");
	Serial.println(ntp_client.getFormattedTime());

	Serial.println();
}

void buzz() {
    for (uint8_t i = 0; i < 3; i++) {
        digitalWrite(POWERPIN, HIGH);
        delay(1);
        digitalWrite(POWERPIN, LOW);
        delay(100);
    }
}