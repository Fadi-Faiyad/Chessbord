// this well inerst my img for me 

function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if(image.innerText.length !== 0) {
            if(image.innerText == "Wpawn" || image.innerText =="Bpawn") {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()
// need a function that well change box color 
// instead of coloring every box 
// it well do it for me
function coloring() {
    const color = document.querySelectorAll('.box')
    
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup
        if (a % 2 === 0) {
            color.style.backgroundColor = 'white'
        }
        if (a % 2 !== 0){
            color.style.backgroundColor = 'gray'
        }
    })
}
coloring()

function reddish () {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'green'){
            
            document.querySelectorAll('.box').forEach(i2 => {
                if(i2.style.backgroundColor == 'green' && i2.innerText.length !== 0){
                    greenText = i2.innerText
                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
                    if (a % 2 === 0 && pinkColor === greenColor){
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor){
                        i2.style.backgroundColor = "rgb(100, 75, 43)"
                    }
                }
            })
        }
    })
}
// i well have to give each peice a move set
//all peice well have a color move
tog = 1
document.querySelectorAll('.box').forEach( item => {
item.addEventListener('click', function (){
  if (item.style.backgroundColor == 'red' && item.innerText.length === 0) {
    tog = tog + 1
  } else if (item.style.backgroundColor == 'red' && item.innerText.length !==0){
    document.querySelectorAll('.box').forEach(i => {
        if(i.style.backgroundColor == 'red') {
            pinkId = i.id
            pinkText = i.innerText

            document.getElementById(pinkId).innerText = ''
            item.innerText = pinkText
            coloring()
            insertImage()
            tog = tog + 1
        }
    })
  }
  getId = item.id
  arr = Array.from(getId)
  arr.shift()
  aside = eval(arr.pop())
  arr.push('0')
  aup = eval(arr.join(""))
  a = aside + aup

// haveing 2 differnt teams 
// if one clicks it well gave the othere a trun
  function whosTurn(toggle) {
    if (item.innerText == `${toggle}pawn`){
        item.style.backgroundColor == 'green'
        if (tog % 2 == 0 && aup < 800){
            
            if (document.getElementById(`b${a + 100}`).innerText == 0){
                document.getElementById(`b${a + 100}`).style.backgroundColor == 'red'
            }
            if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText !==0){
                document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'red'

            }
            if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText !==0){
                document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'red'
            }

        }
        if (tog % 2 == 0 && aup > 100){
            if (document.getElementById(`b${a - 100}`).innerText == 0){
                document.getElementById(`b${a - 100}`).style.backgroundColor == 'red'
            }
            if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText !==0){
                document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'red'

            }
            if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText !==0){
                document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'red'
            }
        }
    }
    // the king can move in all dicertion on all telals
    // the king is only limtied to one move
    if (item.innerText == `${toggle}king`){
        if(aside < 8) {
            document.getElementById(`b${a + 1}`).style.backgroundColor = 'red'
        }
        if (aside > 1) {
            document.getElementById(`b${a - 1}`).style.backgroundColor = 'red'
        }
        if (aup < 800){
            document.getElementById(`b${a + 100}`).style.backgroundColor = 'red'
        }
        if (aup > 100){
            document.getElementById(`b${a - 100}`).style.backgroundColor = 'red'
        }
        if (aup > 100 && aside < 8){
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'red'
        }
        if (aup > 100 && aside > 1){
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'red'

        }
        if (aup < 800 && aside < 8){
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'red'
        }
        if (aup < 800 && aside > 1){
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'red'
        }
        item.style.backgroundColor = 'green'
    }
    // the rook can  move forwared and sides all the way 
    // only on the same colored telals
    if (item.innerText == `${toggle}rook`) {
        
        for (let i = 1; i < 9; i++){
            if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0){
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'red'
            }
            else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0){
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++){
            if((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0){
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'red'
            }
            else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0){
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'red'
                break
            }

        }
        for (let i = 1; i < 9; i++){
            if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0){
                document.getElementById(`b${a + i}`).style.backgroundColor = 'red'
            }
            else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0){
                document.getElementById(`b${a + i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++){
            if ((a + i) < (aup) && document.getElementById(`b${a - i}`).innerText == 0){
                document.getElementById(`b${a - i}`).style.backgroundColor = 'red'
            }
            else if ((a + i) < (aup) && document.getElementById(`b${a - i}`).innerText !== 0){
                document.getElementById(`b${a - i}`).style.backgroundColor = 'red'
                break
            }
        }
        item.style.backgroundColor = 'green'
    }
   // the bishop moves englas accorse 
   // only on its telia
    if(item.innerText == `${toggle}bishop`){
        
        for (let i = 1; i < 9; i++){
            if(i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0){
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'red'
            }
            else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0){
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++){
            if(i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0){
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'red'
            }
            else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++){
            if(i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0){
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'red'
            }
            else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0){
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++){
            if(i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0){
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'red'
            }
            else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'red'
                break
            }
        }
        item.style.backgroundColor = 'green'

    }
    // the queen well move in all dicrtion
    // the queen cane move acores the boerd
    // but it well only go on the color of bord place it staterted
    if (item.innerText == `${toggle}queen`) {

        for (let i = 1; i < 9; i++) {

            if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'red'
            }
            else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'red'
                break
            }
        }

        for (let i = 1; i < 9; i++) {

            if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'red'
            }
            else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++) {

            if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                document.getElementById(`b${a + i}`).style.backgroundColor = 'red'
            }
            else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                document.getElementById(`b${a + i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++) {

            if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                document.getElementById(`b${a - i}`).style.backgroundColor = 'red'
            }
            else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                document.getElementById(`b${a - i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++) {
            if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'red'
            }
            else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++) {
            if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'red'
            }
            else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'red'
                break
            }
        }
        for (let i = 1; i < 9; i++) {
            if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'red'
            }
            else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'red'
                break
            }

        }
        for (let i = 1; i < 9; i++) {
            if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'red'
            }
            else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'red'
                break
            }
        }

        item.style.backgroundColor = 'green'

    }
// the knight moves in L from
// 
    if (item.innerText == `${toggle}knight`){
    
    if(aside < 7 && aup < 800) {
        document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'red'
    }
    if(aside < 7 && aup > 200){
        document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'red'
    }
    if (aside < 8 && aup < 700) {
        document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'red'
    }
    if (aside > 1 && aup < 700) {
        document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'red'
    }
    if (aside > 2 && aup < 800) {
        document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'red'
    }
    if (aside > 2 && aup > 100) {
        document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'red'
    }
    if (aside < 8 && aup > 200) {
        document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'red'
    }
    if (aside > 1 && aup > 200) {
        document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'red'
    }

    item.style.backgroundColor = 'green'

  }
}
if (tog % 2 !== 0) {
    document.getElementById('tog').innerText = "White's Turn"
    whosTurn('W')
}
if (tog % 2 == 0) {
    document.getElementById('tog').innerText = "Black's Turn"
    whosTurn('B')
}

reddish()

numOfKings = 0

// i need to add a win condection
// if i counders myselfe white player i can make fun win and lose lines
// if wking win it well be called a winer, if bking you will be told get good
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }

        })
        if (numOfKings == 1) {
            setTimeout(() => {
               
                if (tog % 2 == 0) {
                    alert('You Win... nothing !!')
                    location.reload()
                }
                else if (tog % 2 !== 0) {
                    alert('Get Good!!')
                    location.reload()
                }
            }, 100)
        }

})

})
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'green') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'red' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()
                    }
               })
            })
        }
    })
})

z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'red') {
            coloring()
        }
    })
})
