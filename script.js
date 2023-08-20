let movie_name=""



async function featchdetails(){
    let url=`https://www.omdbapi.com/?apikey=e690ff0e&t=${movie_name}`
     let raw=await fetch(`${url}`)
     let data=await raw.json();
     console.log(data);

     document.querySelector(".poster img").src=data.Poster;
     document.querySelector(".info .title").textContent=data.Title;
     document.querySelector(".raiting").textContent=data.imdbRating;
     document.querySelector(".rated").textContent=data.Rated;
     document.querySelector(".year").textContent=data.Year;
     document.querySelector(".length").textContent=data.Runtime;
     document.querySelector(".year").textContent=data.Year;
     let genera=data.Genre;
     let splits=genera.split(",",2)
     console.log(splits)
     document.querySelector(".gnr").textContent=splits[0];
     document.querySelector(".gnr1").textContent=splits[1];
     document.querySelector(".plot h6 span").textContent=data.Plot;
     document.querySelector(".cast").textContent=data.Actors;
     document.querySelector(".director").textContent=data.Director;
     document.querySelector(".box-office").textContent=data.BoxOffice;
     document.querySelector(".awards").textContent=data.Awards;
     document.querySelector(".country").textContent=data.Country;
     









}

function clearstarter(){
    document.querySelector(".onhidden").id="starterdisplay"
    document.querySelector(".about").id="";
    document.querySelector(".mov-info").id="";
    
    featchdetails();
}

(function moviename(){
    document.querySelector(".nav button").addEventListener("click",()=>{
        movie_name=document.querySelector(".nav input").value;
        console.log(movie_name);
        document.querySelector(".nav input").value="";
        clearstarter();
    })
})();

