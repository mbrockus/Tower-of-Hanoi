console.log('hello from script')
console.log('test')

// grab towers
const towersEl = document.querySelectorAll('.boxes')

const leftTowerEl = document.querySelector('#box-1');
const middleTowerEl = document.querySelector('#box-2')
const rightTowerEl = document.querySelector('#box-3');


// grab disks
const disks = document.querySelector('.disks')

const disk1 = document.querySelector('#disk1')
const disk2 = document.querySelector('#disk2');
const disk3 = document.querySelector('#disk3');

// variables


let selectedDisk;

// event handlers
function init (){
    console.log('call from init')

}


function diskSelect (event){
    selectedDisk = event.target
    console.log(selectedDisk.getAttribute('size'))
}

function moveDisk (event){

    event.preventDefault();
    console.log(event.target)
    console.log(selectedDisk)

    // boolean to see if child elements are smaller than selected
    let smallerElementBoolean = false


    // grab current element children for each tower
    let selectedChildrenEl = event.target.querySelectorAll('img')

// loop through event.target, compare child element size attribute to selectedDisk size element, return boolean
    for (let i = 0; i < event.target.childElementCount; i++){
        console.log(selectedChildrenEl[i])
        if (selectedChildrenEl[i].getAttribute('size') > selectedDisk.getAttribute('size')) {
            return true
            break
        }
    }
    


    if (selectedDisk === undefined) {
        return
    } else {
    event.target.prepend(selectedDisk)
    }

    // if (selected disk === undefined) {
        // return
    // } else if (event.target has child with size attribute > selectedDisk.getAttribute('size')) {
        // return
    // } else{
            // event.target.prepend(selectedDisk)
    // }

    winCondition()
    }
function winCondition () {
    if (rightTowerEl.childElementCount === 3){
        alert('you win!')
    }
}

// initialize positions
init()

//  event listeners

disk1.addEventListener('click', diskSelect);
disk2.addEventListener('click', diskSelect);
disk3.addEventListener('click', diskSelect);

middleTowerEl.addEventListener('click', moveDisk)
rightTowerEl.addEventListener('click', moveDisk);
leftTowerEl.addEventListener('click', moveDisk);


// changed image to boxes drawn out with css
// added images as part of div
// added click click functionality to 

// working on removing bug

// barriers, not sure how hard it will be to debug yet