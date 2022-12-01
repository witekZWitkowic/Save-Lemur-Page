const loadingText = document.querySelector('.loading_window-sign');
const loadingPage = document.querySelector('.loading_window');
const navbar = document.querySelector('.navbar');


const diffText = () => {
    const texts = ['Combing Lemurs...', 'Rubbing Bellies...', 'Feeding Lemurs...', 'Loading Images...', 'Coloring texts...', 
    'Giving margins...', 'Baking cookies...', 'Fixing bugs...', 'Cleaning logs...', 'Playing around...', 'Loading...'];
    let roll = Math.floor(Math.random()*texts.length);
    const picked = texts[roll];
    return picked;
}

loadingText.innerHTML = diffText();
const loading = () =>{
    setTimeout(() => {
        loadingPage.style.opacity = '0';
        setTimeout(() =>{
            loadingPage.remove();
        }, 1600)
    },3000)
    
}

loading();