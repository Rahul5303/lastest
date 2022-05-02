// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js";

let nva=document.getElementById("navbar");
nva.innerHTML=navbar();

 import{newsearch,append} from "./fetch.js";


// // fetch the data

// // https://masai-mock-api.herokuapp.com/news?q=

let csearch=(e)=>{
    let value =document.getElementById("search_input").value;

    if(e.key==="Enter"){
        newsearch(value).then((data)=>{
            console.log("data:",data);

            let container=document.getElementById("container");
            container.innerHTML=null;

             append(data.articles,container);

        });
    }

};
document.getElementById("search_input").addEventListener("keydown",csearch);


// let newsearch=async()=>{

//     try{
//      let value =document.getElementById("search_input").value;

//     let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);

//     let data=await res.json();
//     console.log("data:",data);

//     }catch(err){
//         console.log("err:",err);
//     }
    



// }





