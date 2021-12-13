// grab towers
const towersEl = document.querySelectorAll('.boxes');

const leftTowerEl = document.querySelector('#box-1');
const middleTowerEl = document.querySelector('#box-2');
const rightTowerEl = document.querySelector('#box-3');

// grab disks
const disks = document.querySelector('.disks');

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

// grab instruction text

const instructionTextEl = document.querySelector('.instructions');

// variables

let selectedDisk;
let level = 1;

// event handlers

// when a disk is clicked, select it to be moved
function diskSelect(event) {
	if (selectedDisk !== undefined) {
		selectedDisk.classList.remove('selectedDisk');
	}
	selectedDisk = event.target;
	event.target.classList.add('selectedDisk');

	// if (event.target == leftTowerEl.firstChild) {
	// 		selectedDisk = event.target;
	// 		event.target.classList.add('selectedDisk');
	// 	} else if (event.target == middleTowerEl.firstChild) {
	// 		selectedDisk = event.target;
	// 		event.target.classList.add('selectedDisk');
	// 	} else if (event.target == rightTowerEl.firstChild) {
	// 		selectedDisk = event.target;
	// 		event.target.classList.add('selectedDisk');
	// 	}
}

// after a disk is selected, click on a tower to move it
function moveDisk(event) {
	event.preventDefault();

	// grab current element children for each tower
	let selectedChildrenEl = event.target.querySelectorAll('img');

	// loop through event.target, compare child element size attribute to selectedDisk size element, return boolean
	for (let i = 0; i < event.target.childElementCount; i++) {
		if (
			selectedChildrenEl[i].getAttribute('sizeIndex') >
			selectedDisk.getAttribute('sizeIndex')
		) {
			return true;
		}
	}
	// prevent moving if no disk is selected
	if (selectedDisk === undefined) {
		return;
	} else {
		event.target.prepend(selectedDisk);
	}

	winCondition();
}
function winCondition() {
	if (rightTowerEl.childElementCount === 3 && level === 1) {
		alert('you win!');
	} else if (rightTowerEl.childElementCount === 4 && level === 2) {
		alert('you win!');
	} else if (rightTowerEl.childElementCount === 5 && level === 3) {
		alert('you win!');
	}
}

function restart() {
	if (selectedDisk !== undefined) {
		selectedDisk.classList.remove('selectedDisk');
	}
	if (level === 1) {
		leftTowerEl.prepend(disk1);
		leftTowerEl.prepend(disk2);
		leftTowerEl.prepend(disk3);
		disk4.remove();
		disk5.remove();
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
}

function levelTwo() {
	level = 2;
	leftTowerEl.prepend(disk1);
	leftTowerEl.prepend(disk2);
	leftTowerEl.prepend(disk3);
	leftTowerEl.prepend(disk4);
	disk5.remove();
}

function levelThree() {
	level = 3;
	leftTowerEl.prepend(disk1);
	leftTowerEl.prepend(disk2);
	leftTowerEl.prepend(disk3);
	leftTowerEl.prepend(disk4);
	leftTowerEl.prepend(disk5);
}

function instructionInit() {
	instructionTextEl.classList.toggle('instructionFocus');
	instructionButtonEl.style.opacity = '1';
}

// initialize positions
restart();
instructionInit();

//  event listeners

disk1.addEventListener('click', diskSelect);
disk2.addEventListener('click', diskSelect);
disk3.addEventListener('click', diskSelect);
disk4.addEventListener('click', diskSelect);
disk5.addEventListener('click', diskSelect);

middleTowerEl.addEventListener('click', moveDisk);
rightTowerEl.addEventListener('click', moveDisk);
leftTowerEl.addEventListener('click', moveDisk);

restartEl.addEventListener('click', restart);
instructionButtonEl.addEventListener('click', instructionInit);

levelOneEl.addEventListener('click', levelOne);
levelTwoEl.addEventListener('click', levelTwo);
levelThreeEl.addEventListener('click', levelThree);
