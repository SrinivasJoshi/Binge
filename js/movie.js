var vars = {};
var datas;
const loader = document.getElementById('loader');


async function generateMovie(e){
    var  response = await fetch(`https://www.omdbapi.com/?t=${e}&apikey=55814f5`);
    var temp = await response.json();
    datas = temp;
    console.log(datas)
}

const addToDOM = ()=>{

    var img1 = document.createElement('IMG');
    var div1 = document.createElement('DIV');
    var mainDiv = document.createElement('DIV');
    var heading = document.createElement('H2');
    var p1 = document.createElement('P');
    var p2 = document.createElement('P');
    var p3 = document.createElement('P');
    var p4 = document.createElement('P');
    var p5 = document.createElement('P');    
    var p6 = document.createElement('P');
    var p7 = document.createElement('P');

    // give them values
    img1.src=datas.Poster;
    mainDiv.classList.add('card');
    div1.classList.add('text');
    heading.innerText = `${datas.Title} (${datas.Year})`;
    p1.innerText = `${datas.Rated} | ${datas.Runtime} | ${datas.Genre}`;
    p2.innerText = `Rating : ${datas.imdbRating}`;
    p3.innerHTML = `Language : ${datas.Language} <br />`;
    p4.innerHTML = `<br />Director : ${datas.Director}`;  
    p5.innerText = `Writers : ${datas.Writer}`;
    p6.innerText = `Actors : ${datas.Actors}`;

    var plot = datas.Plot;
    p7.innerHTML = `<br /> Plot : <br/> ${plot}`;

     // appending them
    mainDiv.appendChild(img1);
    div1.appendChild(heading);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);
    div1.appendChild(p4);
    div1.appendChild(p5);
    div1.appendChild(p6);
    div1.appendChild(p7);
    mainDiv.appendChild(div1); 
    document.body.appendChild(mainDiv);         
}
const disableLoader = () =>{
    loader.style.display="none";
}
window.addEventListener('load',()=>{
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    var movieName=(vars.movie.replace(/%20/g,'+')) ;
    movieName=(movieName.replace(/\d+/g,''));
    movieName=movieName.replace(/[{()}]/g, '');
    movieName = movieName.toLowerCase();

    console.log(movieName)
    generateMovie(movieName);
    setTimeout(()=>{ 
        addToDOM();
        disableLoader();
    },2000);
})