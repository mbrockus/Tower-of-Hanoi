console.log('hello from script')
console.log('test')

// grab towers
const towersEl = document.querySelectorAll('.towers')

const leftTowerEl = document.querySelector('#left-tower')
const middleTowerEl = document.querySelector('#middle-tower');
const rightTowerEl = document.querySelector('#right-tower');

// grab disks
const disks = document.querySelector('.disks')

const disk1 = document.querySelector('#disk1')
const disk2 = document.querySelector('#disk2');
const disk3 = document.querySelector('#disk3');

// event handlers
function init (){
    console.log('call from init')
    // add to left div
    disks.classList.add('middle-side')

}
// drop on event.target
function moveDisk (event) {
    event.preventDefault()
    console.log(event.target)
}

function targetDroppedOn (event) {
    event.preventDefault()
    console.log('item dropped')
}

// initialize positions
init()

//  event listeners

// event listener for when the block starts to drag
// event listener for when the block is dropped
// document.addEventListener('dragend', moveDisk)
disks.addEventListener('drop', targetDroppedOn)
