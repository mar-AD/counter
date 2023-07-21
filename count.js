
const btn = document.querySelector(".btns");
const val = document.querySelector("#counter");

let counter = 0;

btn.addEventListener("click", function(t){
    let tar = t.target.textContent;

    switch (tar) {
        case 'INCREASE':
            counter ++;
            val.innerHTML = counter;
            break;
        case 'DECREASE':
            counter --;
            val.innerHTML = counter;
            break;
        case 'RESET':
            counter = 0
            val.innerHTML = counter;
            break;
    }
    if (val.innerHTML < 0){
        val.style.color = '#d9534f';
    }
    else if (val.innerHTML > 0){
        val.style.color = '#5cb85c';
    }else{
        val.style.color = '#333'
    }
})