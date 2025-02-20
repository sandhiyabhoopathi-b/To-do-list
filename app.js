let create = document.querySelector('.create');
let newcreate = document.querySelector('.newcreate');

create.addEventListener("click", ()=>{
    let container = document.createElement('div');
    container.classList.add("entry");
    let texts = document.createElement('textarea');
    texts.classList.add("text-input"); 
    let addBtn = document.createElement('button');
    addBtn.innerText = "Add";
    addBtn.classList.add("add-item");
    let editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-item");
    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-item");
    let heading = document.createElement('h5');
    heading.classList.add("words");
    container.appendChild(texts);
    container.appendChild(addBtn);
    container.appendChild(editBtn);
    container.appendChild(delBtn);
    container.appendChild(heading);
    newcreate.appendChild(container);
    addBtn.addEventListener("click" , ()=>{
        heading.innerText=texts.value;
        localStorage.setItem('add',texts.value);
    });
    editBtn.addEventListener("click",()=>{
     heading.innerText =  texts.value ;
     localStorage.setItem('add', texts.value);
    });
    delBtn.addEventListener("click",()=>{
      container.remove();
      localStorage.removeItem('add');
    });
});
