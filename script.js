const myLibrary=[
    {id:1,
        title:"Protocols: An Operating Manual for the Human Body ",
        author:" Andrew D. Huberman Ph.D.",
        numberOfPages:"384 pages"
    },
    {id:2,
        title:"The Housemaid Is Watching",
        author:"Freida McFadden",
        numberOfPages:"400 pages"
    },
    {id:3,
        title:"The Women: A Novel",
        author:"Kristin Hannah ",
        numberOfPages:"480 pages"
    }

];

function Book(title,author, numberOfPages){
    this.title=title;
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.id=myLibrary.length+1;

}

const book_cards=document.querySelector('.book-cards');

//add new book
function addBooktoLibrary(book){
    console.log('here the book is', book);
    myLibrary.push(book);
    updateDisplay();


}
const createCard=(id,title,author,numberOfPages)=>{
    const book_card=document.createElement('div');
    const book_title_El=document.createElement('h3');
    const author_El= document.createElement('p');
    const number_Of_Pages_El= document.createElement('p');
    const deleteBtn=document.createElement('button')

//adding classes
        book_card.classList.add('card');
        book_title_El.classList.add('book-title');
        author_El.classList.add("author");
        number_Of_Pages_El.classList.add('numberOfPages')
        // deleteBtn.classList.add('b')
//appending elements to the card
        book_card.appendChild(book_title_El);
        book_card.appendChild(author_El);
        book_card.appendChild(number_Of_Pages_El);
        book_card.appendChild(deleteBtn);
//populate with content
        book_title_El.textContent=title;
        author_El.textContent=author;
        number_Of_Pages_El.textContent=numberOfPages;
        deleteBtn.textContent='Delete';  
//add identifier
      book_card.setAttribute('data-id',id)
        

    return book_card;

}
function displayBooks(){
    myLibrary.map(book=>{
        const {id,title,author,numberOfPages}=book;
        const book_card=createCard(id,title,author,numberOfPages);
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
    addBooktoLibrary( new Book(newTitle.value,newAuthor.value,newNumberOfPages.value));
});

//Delete a book

//toggle the books read status