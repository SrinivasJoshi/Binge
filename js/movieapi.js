const menuToggle = document.querySelector('.toggle');
const inputEle = document.querySelector('.Search');
const navStuff = document.getElementById('nav-stuff');
const navItems = document.getElementById('nav-items');
const nav = document.getElementById('nav');
const search = document.getElementById('Search');
const exploreBtn = document.getElementById('explore');
const mainBlocks = document.getElementsByClassName('block');
const blocks= [...mainBlocks];
var ListOfMovies = ['Inception','The Mummy','The Matrix','Howl','The Revenant','Speed','Train To Busan','Bang Bang'];
var datas = [];
var i = 0;

async function generateMovie(e){
    var  response = await fetch('https://www.omdbapi.com/?t='+e+'&apikey=55814f5');
    var data = await response.json();
    datas = [...datas,data];
}

const setBlocks = ()=>{ 
    for(i=0;i<8;i++)
    {
        
        // create those elements
        var img1 = document.createElement('IMG');
        var div1 = document.createElement('DIV');
        var heading = document.createElement('H2');
        var p1 = document.createElement('P');
        var p2 = document.createElement('P');
        var p3 = document.createElement('P');
        var p4 = document.createElement('P');
        
        var p6 = document.createElement('P');
        var p7 = document.createElement('P');

        // give them values
        img1.src=datas[i].Poster;
        div1.classList.add('text');
        heading.innerText = `${datas[i].Title} (${datas[i].Year})`;
        p1.innerText = `${datas[i].Rated} | ${datas[i].Runtime} | ${datas[i].Genre}`;
        p2.innerText = `Rating : ${datas[i].imdbRating}`;
        p3.innerHTML = `Language : ${datas[i].Language} <br />`;
        p4.innerText = `Director : ${datas[i].Director}`;
        
        p6.innerText = `Actors : ${datas[i].Actors}`;

        var plot = datas[i].Plot;
        if(plot.length>45){
            plot =  plot.slice(0,105)+'...';
        }
        p7.innerHTML = `<br /> Plot : <br/> ${plot}`;

        // appending them
        blocks[i].appendChild(img1);
        div1.appendChild(heading);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div1.appendChild(p4);
        
        div1.appendChild(p6);
        div1.appendChild(p7);
        blocks[i].appendChild(div1);          
    }
   
}
// STATER EVENT:
  window.addEventListener('load',e=>{
    inputEle.target="";
      
      ListOfMovies.map(movie=>{
          generateMovie(movie);
     });
      
          setTimeout(()=>{
              console.log(datas);
              setBlocks();
          },2000);
        
  })
  

//   SCROLL-BG CHANGE EVENT
window.onscroll=()=>{
    if(window.scrollY>80){
        nav.style.backgroundColor='#000';
    }
    if(window.scrollY<80){
        nav.style.backgroundColor='transparent';
    }
}

// MENU CLICK
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  inputEle.classList.toggle('active');
});

// EXPLORE BTN CLICK EVENT
exploreBtn.addEventListener('click',()=>{
    window.scrollBy(0,800);
});

// ANIMATIONS
ScrollReveal().reveal('.block',{delay:100,x:200});

gsap.from('#nav',{
    opacity: 0, 
    y: 100, 
    duration: 1
  });
gsap.from('.content',{
    opacity: 0, 
    x: 100, 
    duration: 1.2
  });
  gsap.from('.home-page',{
    opacity: 0,  
    duration: 1.5
  });
  


