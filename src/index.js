import "./style.css";
import leftAr from "./arrow-left.png";
import rightAr from "./arrow-right.png";
import i1 from "./img1.jpg";
import i2 from "./img2.jpg";
import i3 from "./img3.jpg";

const img1 = new Image();
img1.src = i1;
img1.id = "img1";
const img2 = new Image();
img2.src = i2;
img2.id = "img2";
const img3 = new Image();
img3.id = "img3";
img3.src = i3;
const rightArrow = new Image();
rightArrow.src = rightAr;
const leftArrow = new Image();
leftArrow.src = leftAr;

const ham = document.getElementById("ham");
const actMenu = document.getElementById("actualMenu");
const board = document.getElementById("board");
const left = document.getElementById("left");
const right = document.getElementById("right");
const leDots = document.getElementById("leDots");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

ham.addEventListener("click", () => {
	actMenu.classList.toggle("hidden");
	actMenu.classList.toggle("absolute");
});

left.appendChild(leftArrow);
right.appendChild(rightArrow);

function centerImage(elem) {
	elem.style.backgroundSize = "center";
	elem.style.backgroundPostition = "center";
	elem.style.height = "300px";
	elem.style.maxWidth = "500px";
	elem.style.objectFit = "cover";
}

function getNextImage(currentImage) {
	switch (currentImage) {
		case "img1":
			return img2;
		case "img2":
			return img3;
		case "img3":
			return img1;
	}
}
function getPreviousImage(currentImage) {
	switch (currentImage) {
		case "img1":
			return img3;
		case "img2":
			return img1;
		case "img3":
			return img2;
	}
}
function loadNextImage(theImage) {
	console.log(`remove and add colors in dot ${dot1.id}`);
	dot1.classList.remove("bg-black");
	dot1.classList.add("bg-white");
	dot2.classList.remove("bg-black");
	dot2.classList.add("bg-white");
	dot3.classList.remove("bg-black");
	dot3.classList.add("bg-white");

	board.removeChild(board.lastElementChild);
	board.appendChild(theImage);
	console.log(board.lastElementChild.id[3]);
	let nr = `dot${board.lastElementChild.id[3]}`;
	document.getElementById(nr).classList.add("bg-black");
	centerImage(theImage);
}

window.addEventListener("load", () => {
	board.removeChild(board.lastElementChild);
	board.appendChild(img1);
	centerImage(img1);
	dot1.classList.add("bg-black");
});

setInterval(() => {
	console.log(`loadNextImage called with ${board.lastElementChild.id}`);
	loadNextImage(getNextImage(board.lastElementChild.id));
}, 4500);

left.addEventListener("click", () => {
	loadNextImage(getPreviousImage(board.lastElementChild.id));
});
right.addEventListener("click", () => {
	loadNextImage(getNextImage(board.lastElementChild.id));
});

//getNextImage(document.lastChild.id)
