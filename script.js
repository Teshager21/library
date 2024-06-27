let myLibrary=[
    {id:1,
        title:"Protocols: An Operating Manual for the Human Body ",
        author:" Andrew D. Huberman Ph.D.",
        numberOfPages:384,
        read:false
    },
    {id:2,
        title:"The Housemaid Is Watching",
        author:"Freida McFadden",
        numberOfPages:400,
        read:false,
    },
    {id:3,
        title:"The Women: A Novel",
        author:"Kristin Hannah ",
        numberOfPages:480,
        read:false,
    },
    {id:4,
        title:"White Fang",
        author:"Jack London",
        numberOfPages:180,
        read:false,
    },
    {id:4,
        title:"Seven Habits of Highly Effective People",
        author:"Stephen R. Covey",
        numberOfPages:280,
        read:false,
    },


];

function Book(title,author, numberOfPages,read){

    this.id=myLibrary[myLibrary.length-1]['id']+1;
    this.title=title;
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.read=read;
    
}

const book_cards=document.querySelector('.book-cards');

//add new book
function addBooktoLibrary(book){
    console.log('here the book is', book);
    myLibrary.push(book);
    updateDisplay();
}
const createCard=(id,title,author,numberOfPages,read)=>{
    const book_card=document.createElement('div');
    const book_title_El=document.createElement('h3');
    const author_El= document.createElement('p');
    const number_Of_Pages_El= document.createElement('p');
    const card_actions=document.createElement('div')
    const deleteBtn=document.createElement('button');
    const readBtn=document.createElement('button');

//adding classes
        book_card.classList.add('card');
        book_title_El.classList.add('book-title');
        author_El.classList.add("author");
        number_Of_Pages_El.classList.add('numberOfPages')
        deleteBtn.classList.add('delete-btn')
        card_actions.classList.add('card-actions')
//appending elements to the card
        book_card.appendChild(book_title_El);
        book_card.appendChild(author_El);
        book_card.appendChild(number_Of_Pages_El);
        card_actions.appendChild(deleteBtn);
        card_actions.appendChild(readBtn);
        book_card.appendChild(card_actions);
//populate with content
        book_title_El.textContent=title;
        author_El.textContent=author;
        number_Of_Pages_El.textContent= numberOfPages+' pages';
        deleteBtn.textContent='Delete'; 
        readBtn.textContent= read?'UnRead':"Read"; 
//add identifier
      book_card.setAttribute('data-id',id)
//add event listeners
deleteBtn.addEventListener('click',(e)=>{
    myLibrary=myLibrary.filter(el=>el.id!==id);
    updateDisplay();
})
readBtn.addEventListener('click',()=>{  //toggle the read status of a book
    read?read=false:read=true;
    updatedBook=new Book(title,author,numberOfPages,read);
    myLibrary=myLibrary.filter(el=>el.id!==id);
    myLibrary.push(updatedBook);
    updateDisplay();
})
    return book_card;
}
function displayBooks(){
    myLibrary.map(book=>{
        const {id,title,author,numberOfPages,read}=book;
        const book_card=createCard(id,title,author,numberOfPages,read);
        book_cards.appendChild(book_card);
    })
}
const updateDisplay=()=>{
    book_cards.innerHTML='';
    displayBooks();
}
displayBooks();
//button & modal to add new book
const dialog=document.getElementById('dialog');
const showDialogBtn= document.querySelector('.new-book');
const closeModal=document.querySelector('.close-modal');
const confirmBtn=document.querySelector('#confirmBtn')
const newAuthor= document.querySelector('#new-author')
const newTitle=document.querySelector('#new-title');
const newNumberOfPages=document.querySelector('#new-numberOfPages');

showDialogBtn.addEventListener('click',()=>{dialog.showModal();});
closeModal.addEventListener("click",(e)=>{
    e.preventDefault();
    dialog.close();
});
confirmBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    addBooktoLibrary( new Book(newTitle.value,newAuthor.value,newNumberOfPages.value,false));
});

//toggle the books read status