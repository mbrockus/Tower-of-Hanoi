console.log('hello from script')
console.log('test')

// grab towers
const towersEl = document.querySelectorAll('.towers')

const middleTowerEl = document.querySelector('#box-2')

// grab disks
const disks = document.querySelector('.disks')

const disk1 = document.querySelector('#disk1')
const disk2 = document.querySelector('#disk2');
const disk3 = document.querySelector('#disk3');

// event handlers
function init (){
    console.log('call from init')
    // add to left div
    // disks.classList.add('left-side')
    // disk1.classList.remove('left-side')
    disk1.classList.add('left-side')

}
// drop on event.target
function moveDisk (event) {
    event.preventDefault()
    console.log(event.target)
    // when dropped on other tower
    // append to that towers class
    // take it out of the current tower
}

function targetDroppedOn (event) {
    // event.preventDefault()
    console.log('item dropped')
}

function clickHandler (event){
    console.log('clicked')
    middleTowerEl.append(event.target)
}

// initialize positions
init()

//  event listeners

// event listener for when the block starts to drag
// event listener for when the block is dropped
// document.addEventListener('dragend', moveDisk)
// document.addEventListener('drop', targetDroppedOn)
disk1.addEventListener('click', clickHandler);
disk2.addEventListener('click', clickHandler);
disk3.addEventListener('click', clickHandler);


