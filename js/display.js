    var data;
    var datas=[];
    var length;
    var i;
    const cards = document.getElementById('cards');
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    
    var movieName=(vars.search.replace(/[+]/g,' ')) ;

    async function generateMovies(e){
        var  response = await fetch('https://www.omdbapi.com/?s='+e+'&apikey=55814f5');
        var temp = await response.json();
        datas = temp.Search;
        length = datas.length;
    }

    const addToDom = ()=>{
        for(i=0;i<length;i++)
      {
        // create those elements
        var mainDiv = document.createElement('DIV');
        mainDiv.classList.add('card');
        var img1 = document.createElement('IMG');
        var div1 = document.createElement('DIV');
        var heading = document.createElement('H2');
        var p = document.createElement('A');

        // give them values
        img1.src=datas[i].Poster;
        div1.classList.add('text');
        heading.innerText = `${datas[i].Title} (${datas[i].Year})`;
        p.innerText='See More';
        p.classList.add('link');
       

        // appending them
        mainDiv.appendChild(img1);
        div1.appendChild(heading);
        div1.appendChild(p);
        mainDiv.appendChild(div1);    
        cards.appendChild(mainDiv);
     }
        
    }

    window.addEventListener('load',()=>{
        generateMovies(movieName);
        setTimeout(()=>{
            addToDom();
        },2000)
    });

    window.addEventListener('click',e=>{
        if(e.target.classList.contains('link'))   
       {
          var movie =  (e.target.parentElement.childNodes[0].innerText);
          window.location.href=`./movie.html?movie=${movie}`; 
       }
        
    })
