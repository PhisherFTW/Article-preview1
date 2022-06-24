let shareBtn = document.getElementById('share-button');
let square = document.getElementById('square');
let popup = document.getElementById('pop-up');
let isopen = 1;
shareBtn.addEventListener('click', popupfunc)

function popupfunc () {
    if (isopen == 1) {
        square.style.display = 'flex';
        popup.style.display = 'flex';
        isopen = 0;
    } else {
        square.style.display = 'none';
        popup.style.display = 'none';
        isopen = 1;
    }
}