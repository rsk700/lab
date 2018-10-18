function setPixel(imageData, x, y, r, g, b, a) {
	index = (x + y * imageData.width) * 4;
	imageData.data[index+0] = r;
	imageData.data[index+1] = g;
	imageData.data[index+2] = b;
	imageData.data[index+3] = a;
}

function setBPixel(img, x, y) {
	setPixel(img, x, y, 0, 0, 0, 255);
}

function isPrime(n){
	for(var i=2; i<n; i++){
		if(n%i==0){
			return false;
		}
	}
	return true;
}


function fill_with_primes(img){
	var x = img.width/2;
	var y = img.height/2;
	var d = 0; // 0 - left, 1 - up, 2 - right, 3 - down
	var d_len = 1;
	var step = 1;
	var max_dots = img.width*img.height;
	var update_time = 0;

	main_loop:
		while(true){
		for(var s=0; s<2; s++){
			for(var n=0; n<d_len; n++){
				if(step>=max_dots){
					break main_loop;
				}
				if(d==0){
					x--;
				}
				else if(d==1){
					y--;
				}
				else if(d==2){
					x++;
				}
				else if(d==3){
					y++;
				}
				if(isPrime(step)){
					setBPixel(img, x, y);
				}
				step++;
				// - update canvas at every 1000th step
				if(step%1000==0) {
					postMessage({img: img});
				};
			}
			if(d==3) {
				d = 0;
			}
			else {
				d++;
			}
		}
		d_len++;
	}
}

onmessage = function(event) {
	fill_with_primes(event.data.img);
	postMessage({img: event.data.img});
}
