let inptName =document.querySelector(".inptName");
let inputCaption =document.querySelector('.inputCaption');
let postBtn =document.querySelector('.postBtn');
let allPost =document.querySelector(".allPost")
let arr=[{
    name:"jibon",
  },{
    name:"ddd",
  },{
  
    name:"vvv",
  },]
postBtn.addEventListener("click",function(){
    console.log(inptName.value);
    console.log(inputCaption.value);
})
function Display(){
    arr.map((item)=>{
        allPost.innerHTML += `<div class="card" style="width: 18rem; margin-top: 30px;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-primary">Edit</button>
          <button type="button" class="btn btn-danger">Delet</button>
        </div>
      </div>`
    })
}
Display()

