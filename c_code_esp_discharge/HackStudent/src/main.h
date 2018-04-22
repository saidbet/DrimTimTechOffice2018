#ifndef main_h
#define main_h

#include <Arduino.h>
#include <WiFi.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "keys.h"

#define SHOCK_MILLIS 10
#define POWERPIN 12

WiFiServer server(80);
WiFiClient esp_client;
WiFiUDP ntp_udp;
NTPClient ntp_client(ntp_udp, ntp_server, 0, 60000);

void serial_init();
void wifi_init();
void ntp_init();
void powerpin_init();
void print_info();
void buzz(int replay);

// Client variables 
char linebuf[80];
int charcount = 0;

#endif