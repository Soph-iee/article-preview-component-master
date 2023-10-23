const Share = document.querySelectorAll('.share-icon');

for (let i= 0; i< Share.length; i++){
  
  Share[i].addEventListener ('click', ()=>{
  document.querySelector ('.share-section').classList.toggle('display')
  document.querySelector ('.share-active').classList.toggle('display')
});
};

