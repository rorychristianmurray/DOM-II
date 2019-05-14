// Your code goes here
/* 

	* [ 3 ] `mouseover`
	* [ 3 ] `keydown`
	* [ 1 ] `wheel`
	* [ 1 ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ 1 ] `scroll`
	* [ ] `select`
    * [ 1 ] `dblclick`
	* 
	* [ 1 ]	copy
	* [ 2 ]	click	
	* [ 1 ] mousedown
	* [ 1 ]	mouseout
    
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

// Make bottom content reappear when clicking on bottom copyright



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

// bodyManipulate.addEventListener('wheel', function(event) {
// 	console.log('wheel');
// 	alert('take your time, my man');

// })

// Mousedown
const topRightImg = document.querySelector('.img-content')

// topRightImg.addEventListener('mousedown', function(event) {
// 	console.log('mousedown');
// 	topRightImg.style.width = '200%'

// })

topRightImg.addEventListener('mousedown', function(event) {
	console.log('mousedown');
	topRightImg.style.width = '100%'

})

// Scroll

// document.addEventListener('scroll', function(event) {
// 	console.log('scroll');
// 	setTimeout(function() {
// 		alert(`That's enough messing around`)
// 	}, 2000)
	
// })



// dblclick

let topTextContent = document.querySelector('.text-content');

topTextContent.addEventListener('dblclick', function(event) {
	console.log('dblclick');
	topTextContent.style.color = 'fuchsia'

})

// mouseout

topTextContent.addEventListener('mouseout', function(event) {
	console.log('dblclick');
	topTextContent.style.color = 'black'

})

// drag

topTextContent.addEventListener('drag', function(event) {
	console.log('drag');
	topTextContent.style.color = 'red'

})






// Nest two similar events and prevent






