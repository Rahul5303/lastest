let newsearch=async(value)=>{

    try{
    //  let value =document.getElementById("search_input").value;

    let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);

    let data=await res.json();
    //  console.log("data:",data);

     return data;

    }catch(err){
        console.log("err:",err);
    }

    



}

let append=(data,container)=>{
    data.forEach(({description,title,urlToImage})=>{

        let div=document.createElement("div");
         div.setAttribute("class","image");
        let img=document.createElement("img");
        let p=document.createElement("p");
        let h3=document.createElement("h3");

        img.src=urlToImage;
        p.innerText=description;
        h3.innerText=title;

        div.append(img,p,h3);
        container.append(div);

    });

}

export{ newsearch,append};