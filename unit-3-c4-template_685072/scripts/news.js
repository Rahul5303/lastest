// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";

let nva=document.getElementById("navbar");
nva.innerHTML=navbar();

let newshead=async()=>{

    let value1=document.getElementById("search_input").value;

    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value1}`);

    let data=res.json();
    console.log("data:",data);

    }catch(err){
        console.log("err:",err);
    }
    



}

