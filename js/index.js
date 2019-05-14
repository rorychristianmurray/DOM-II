// Your code goes here
/* 

	* [ 3 ] `mouseover`
	* [ 3 ] `keydown`
	* [ 1 ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
    * [ ] `dblclick`
	* 
	* [ 1 ]	copy
	* [ 2 ]	click	
    
*/

// Change top header 'Fun Bus'

const topHeader = document.querySelector('.logo-heading');

topHeader.addEventListener('copy', function(event) {
	console.log('copy');
	topHeader.textContent = 'anddddd its gone'
})

topHeader.addEventListener('mouseover', function(event) {
	console.log('mousover');
	topHeader.textContent = 'Fun Bus'
});


// Change the 'Welcome To Fun Bus!' header

const welcomeHeaderChange = document.querySelector('h2');

welcomeHeaderChange.addEventListener('mouseover', function(event) {
    console.log('mouseover');
    welcomeHeaderChange.textContent = "Switch it up";
});

welcomeHeaderChange.addEventListener('click', function(event) {
    console.log('click');
    welcomeHeaderChange.textContent = "Welcome To Fun Bus!";
});

// Make bottom columns dissapear on mouseover

const bottomContent = document.querySelectorAll('.destination');

for(let i = 0; i < bottomContent.length; i++) {
	bottomContent[i].addEventListener('mouseover', function(event) {
		console.log('mouseover')
		bottomContent[i].style.display = 'none';
	})

}

// Make bottom content reappear when clicking on bottom copywright



const footerCopy = document.querySelector('footer');

footerCopy.addEventListener('click', function(event) {
	console.log('click');
	for(let i = 0; i < bottomContent.length; i++) {
		bottomContent[i].style.display = "block";
		console.log(bottomContent[i].style.display);
	}

})

// Change background to red when key is pressed on keyboard and back when another key is pressed

let bodyManipulate = document.body;

bodyManipulate.addEventListener('keydown', function(event) {
	console.log('keydown0');
	bodyManipulate.style.backgroundColor = 'red'
})

bodyManipulate.addEventListener('keydown', function(event) {
	console.log('keydown1');
	setTimeout(function() {
		bodyManipulate.style.backgroundColor = 'yellow';
	}, 1000);
})

bodyManipulate.addEventListener('keydown', function(event) {
	console.log('keydown1');
	setTimeout(function() {
		bodyManipulate.style.backgroundColor = 'white';
	}, 2000);
})

bodyManipulate.addEventListener('wheel', function(event) {
	console.log('wheel');
	alert('take your time, my man');

})






