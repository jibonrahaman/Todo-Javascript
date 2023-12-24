let inptName =document.querySelector(".inptName");
let inputCaption =document.querySelector('.inputCaption');
let postBtn =document.querySelector('.postBtn');
let allPost =document.querySelector(".allPost")
let arr=[]
postBtn.addEventListener("click",function(){
    allPost.innerHTML=""
   arr.push({
    name:inptName.value,
    caption:inputCaption.value,
   })
   Display()
})


function Display(){
    arr.map((item)=>{
        allPost.innerHTML += `<div class="card" style="width: 18rem; margin-top: 30px;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.caption}</p>
          <button type="button" class="btn btn-primary">Edit</button>
          <button type="button" class="btn btn-danger dltBtn">Delete</button>
        </div>
      </div>`         
    }) 

              // dlt btn start
              const dltBtn=document.querySelectorAll('.dltBtn');
              const dltArr=Array.from(dltBtn);
              dltArr.map((item,index)=>{
                item.addEventListener('click',function(){
             allPost.innerHTML = ''
             console.log(allPost);
                  arr.splice(index,1)
                  Display()
                })
              })
              // dlt btn start
              
 
}


