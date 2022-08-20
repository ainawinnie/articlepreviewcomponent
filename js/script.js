const shareButton = document.getElementById('share');
const shareBox = document.getElementById('share-box');

shareButton.addEventListener('click', openShare);

function openShare(e) {

    const state = shareBox.style.display;
    shareButton.classList.add('share-selected');
    shareButton.classList.remove('share');
    console.log(state.value);
   
    shareBox.style.display='flex'
}