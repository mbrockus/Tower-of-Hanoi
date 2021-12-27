// grab towers
const towersEl = document.querySelectorAll('.boxes');

const leftTowerEl = document.querySelector('#box-1');
const middleTowerEl = document.querySelector('#box-2');
const rightTowerEl = document.querySelector('#box-3');

// grab disks
const disks = document.querySelector('.disks');

const diskAllEl = document.querySelectorAll('.disk')

const disk1 = document.querySelector('#disk1');
const disk2 = document.querySelector('#disk2');
const disk3 = document.querySelector('#disk3');
const disk4 = document.querySelector('#disk4');
const disk5 = document.querySelector('#disk5');

// grab bottom buttons

const restartEl = document.querySelector('#restart');
const instructionButtonEl = document.querySelector('#instructions');

// grab level buttons

const levelOneEl = document.querySelector('#level-one');
const levelTwoEl = document.querySelector('#level-two');
const levelThreeEl = document.querySelector('#level-three');

// grab instruction text and buttons

const instructionTextEl = document.querySelector('.instructions');
const instructionButtonCloseEl = document.querySelector('#closeInstructions');

// grab winscreen text
const winscreenEl = document.querySelector('.winScreen')

// grab body

const bodyEl = document.querySelector('body')
const everythingEl = document.querySelector('*')
const gameBoardEl = document.querySelector('.gameBoard')
const headerEl = document.querySelector('header')
const buttonEl = document.querySelectorAll('button')

// grab span for movecounters
const moveCounterEl = document.querySelector('#moveCounter')

// variables

let selectedDisk;
let level = 1;
let moveCounter = 1;
// find out how to make these true if their corresponding screens are open, and false if not
let instructionOpen = false;
let winScreenOpen = false;

// event handlers

// when a disk is clicked, select it to be moved, only select if top disk is selected
function diskSelect(event) {
	event.preventDefault();

	if (selectedDisk !== undefined) {
		selectedDisk.classList.remove('selectedDisk');
	}

	selectedDisk = undefined;
	const towerParentEl = event.target.parentNode.querySelectorAll('img');

	// compare size of selected disk to all disks within the selected disks parent node, if larger than smallest, exit function
	for (let i = 0; i < towerParentEl.length; i++) {
		if (
			towerParentEl[i].getAttribute('data-size-index') >
			event.target.getAttribute('data-size-index')
		) {
			return;
		}
	}

	selectedDisk = event.target;
	event.target.classList.add('selectedDisk');
}

// after a disk is selected, click on a tower to move it
function moveDisk(event) {
	
	event.preventDefault();
	console.log(event.target)
	console.log(selectedDisk.parentNode)
	

	// grab current element children for each tower
	let selectedChildrenEl = event.target.querySelectorAll('img');

	// loop through event.target, compare child element size attribute to selectedDisk size element,
	for (let i = 0; i < event.target.childElementCount; i++) {
		if (
			selectedChildrenEl[i].getAttribute('data-size-index') >
			selectedDisk.getAttribute('data-size-index')
		) {
			return;
		}
	}

	// prevent moving if no disk is selected
	if (selectedDisk === undefined) {
		return;
		// prevent moving if trying to move disk to a tower its already on
	} else if (event.target === selectedDisk.parentNode) {
		console.log('you did it!')
		return
	}
	
	else {
		event.target.prepend(selectedDisk);
		moveCounter += 1;
		moveCounterEl.innerText('test')
		console.log(moveCounterEl.innerText)
		console.log(moveCounter)

	}

	winCondition();
}

function restart() {
	moveCounter = 0
	if (selectedDisk !== undefined) {
		selectedDisk.classList.remove('selectedDisk');
	}
	if (level === 1) {
		leftTowerEl.prepend(disk1);
		leftTowerEl.prepend(disk2);
		leftTowerEl.prepend(disk3);
		disk4.remove();
		disk5.remove();
		// highlight level one button

		// unhighlight all others
	} else if (level === 2) {
		leftTowerEl.prepend(disk1);
		leftTowerEl.prepend(disk2);
		leftTowerEl.prepend(disk3);
		leftTowerEl.prepend(disk4);
		disk5.remove();
	} else if (level === 3) {
		leftTowerEl.prepend(disk1);
		leftTowerEl.prepend(disk2);
		leftTowerEl.prepend(disk3);
		leftTowerEl.prepend(disk4);
		leftTowerEl.prepend(disk5);
	}
}

function levelOne() {
	level = 1;
	disk4.remove();
	disk5.remove();
	leftTowerEl.prepend(disk1);
	leftTowerEl.prepend(disk2);
	leftTowerEl.prepend(disk3);

	// hide instructions if open
	if (instructionOpen) {
		instructionInit();
	}
	if (winScreenOpen) {
		winConditionClose();
		winScreenOpen = false;
	}
	// highlight level one button
	levelOneEl.classList.add('levelToggle')
	levelTwoEl.classList.remove('levelToggle')
	levelThreeEl.classList.remove('levelToggle');

}

function levelTwo() {
	level = 2;
	leftTowerEl.prepend(disk1);
	leftTowerEl.prepend(disk2);
	leftTowerEl.prepend(disk3);
	leftTowerEl.prepend(disk4);
	disk5.remove();

	// hide instructions if open
	if (instructionOpen) {
		instructionInit();
	}

	if (winScreenOpen) {
		winConditionClose();
		winScreenOpen = false;
	}
	// highlight level two button
	levelOneEl.classList.remove('levelToggle');
	levelTwoEl.classList.add('levelToggle');
	levelThreeEl.classList.remove('levelToggle');
}

function levelThree() {
	level = 3;
	leftTowerEl.prepend(disk1);
	leftTowerEl.prepend(disk2);
	leftTowerEl.prepend(disk3);
	leftTowerEl.prepend(disk4);
	leftTowerEl.prepend(disk5);

	// hide instructions if open
	if (instructionOpen) {
		instructionInit();
	}

	if (winScreenOpen) {
		winConditionClose();
		winScreenOpen = false;
	}
	// highlight level three button
	levelOneEl.classList.remove('levelToggle');
	levelTwoEl.classList.remove('levelToggle');
	levelThreeEl.classList.add('levelToggle');
}

function instructionInit() {
	// changing state of whether the instruction screen is open or not
	if (!instructionOpen) {
		instructionOpen = true
	} else {
		instructionOpen = false;
	}
	// opening the instruction screen
	instructionTextEl.classList.toggle('hide');
	bodyEl.classList.toggle('body')
	bodyEl.classList.toggle('bodyBlackout')
	disk1.classList.toggle('hide')
	disk2.classList.toggle('hide');
	disk3.classList.toggle('hide');
	disk4.classList.toggle('hide');
	disk5.classList.toggle('hide');
	restartEl.classList.toggle('hide')
	instructionButtonEl.classList.toggle('hide')
	
}

function winCondition() {
	if (leftTowerEl.childElementCount === 0 && middleTowerEl.childElementCount === 0) {
		winScreenOpen = true
		winscreenEl.classList.toggle('hide');
		bodyEl.classList.toggle('body');
		bodyEl.classList.toggle('bodyBlackout');
		disk1.classList.toggle('hide');
		disk2.classList.toggle('hide');
		disk3.classList.toggle('hide');
		disk4.classList.toggle('hide');
		disk5.classList.toggle('hide');
		restartEl.classList.toggle('hide');
		instructionButtonEl.classList.toggle('hide');
	}
}

function winConditionClose() {

	winscreenEl.classList.toggle('hide');
	bodyEl.classList.toggle('body');
	bodyEl.classList.toggle('bodyBlackout');
	disk1.classList.toggle('hide');
	disk2.classList.toggle('hide');
	disk3.classList.toggle('hide');
	disk4.classList.toggle('hide');
	disk5.classList.toggle('hide');
	restartEl.classList.toggle('hide');
	instructionButtonEl.classList.toggle('hide');
	winScreenOpen = false;
}

// initialize positions

restart();
instructionInit();

//  event listeners

// add bubbling here
disk1.addEventListener('click', diskSelect);
disk2.addEventListener('click', diskSelect);
disk3.addEventListener('click', diskSelect);
disk4.addEventListener('click', diskSelect);
disk5.addEventListener('click', diskSelect);

middleTowerEl.addEventListener('click', moveDisk);
rightTowerEl.addEventListener('click', moveDisk);
leftTowerEl.addEventListener('click', moveDisk);

restartEl.addEventListener('click', restart);

levelOneEl.addEventListener('click', levelOne);
levelTwoEl.addEventListener('click', levelTwo);
levelThreeEl.addEventListener('click', levelThree);

instructionButtonCloseEl.addEventListener('click', instructionInit)
instructionButtonEl.addEventListener('click', instructionInit);
