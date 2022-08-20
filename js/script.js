const shareButton = document.getElementById('share');
const shareBox = document.getElementById('share-box');
const teste = false

shareButton.addEventListener('click', openShare);


function openShare(e) {
    shareBox.classList.toggle('share-box');
    shareBox.classList.toggle('share-area');
    shareButton.classList.toggle('share');
    shareButton.classList.toggle('share-selected');

}

/*
function openShare(e) {


    if(teste !== true) {
        shareBox.style.display = 'Flex';
        shareButton.classList.add('share-selected');
        shareButton.classList.remove('share');
        const teste = true
    } else{
        shareBox.style.display = 'none';
        shareButton.classList.add('share-selected');
        shareButton.classList.remove('share');
    }

   
   
    shareBox.style.display='flex'
}*/