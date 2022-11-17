window.addEventListener('load', function(){
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ['#60d394','#d36060','#c060d3','#d3d160', '#606bd3', '#60c2d3'];
    console.log(sound);

    // click function
    pads.forEach((pad, index)=>{
        pad.addEventListener('click',()=>{
            sound[index].currentTime=0;
            sound[index].play();
            booble(index)
        })
    })
    // animation function
    const booble= (index)=>{
        const booble = document.createElement('div');
        visual.appendChild(booble)
        booble.style.backgroundColor = colors[index];
        booble.style.animation='jump 1s ease-in';
        booble.addEventListener('animationend', function(){
            visual.removeChild(booble);
        })
    }
})
