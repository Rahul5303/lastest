let navbar=()=>{
    return`
    <h1>
        <a href="index.html">News App</a>
      </h1>
      <input type="text" id="search_input" placeholder="Search News">

      <div id="sidebar">
        <h2>Countries</h2>
        <h3 id="in">India</h3>
        <h3 id="us">Usa</h3>
        <h3 id="ch">China</h3>
        <h3 id="uk">UK</h3>
        <h3 id="nz">New Zealand</h3>

      </div>
    `
}

export {navbar};