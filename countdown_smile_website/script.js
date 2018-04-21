function countdown(elem1, elem2, s) {
	var t = s;
	return new Promise(function(resolve) {
		function loop(s) {
			elem1.innerHTML = s;
			
			if (s < 3 && s >= 0) {
				elem2.innerHTML = "SMILE !";
				var audio = new Audio('audio.wav');
				audio.play();
			}
			else
			{
				elem2.innerHTML = "";
			}
			
			if (s < 0)
			{
				s = t;
				loop(s);
			}
			else
			{
				setTimeout(loop, 1000, s - 1);
			}
		}
		loop(s);
	})
}

countdown(document.querySelector('#a'), document.querySelector('#b'), 10)