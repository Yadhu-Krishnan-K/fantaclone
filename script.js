const ham = document.getElementById('hamburger')
const nav = document.getElementById('navigations')
const navOpts = document.getElementById("navOptions")

ham.addEventListener('click',()=>{
    console.log('clicked hamburger')
    nav.classList.toggle('showNav')
    navOpts.classList.toggle('showNavOpt')
})
window.addEventListener('resize',()=>{
    if(window.innerWidth>1200){
        nav.classList.remove('showNav')
        navOpts.classList.remove('showNavOpt')
    }
})