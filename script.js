const myLibrary=[
    {title:"Protocols: An Operating Manual for the Human Body ",
        author:" Andrew D. Huberman Ph.D.",
        numberOfPages:"384 pages"
    },
    {title:"The Housemaid Is Watching",
        author:"The Housemaid Is Watching",
        numberOfPages:"400 pages"
    },
    {title:"The Women: A Novel",
        author:"Kristin Hannah ",
        numberOfPages:"480 pages"
    }

];

function Book(title,author, numberOfPages){
    this.title=title;
    this.author=author;
    this.numberOfPages=numberOfPages;

}

//add new book
function addBooktoLibrary(){

}

function displayBooks(){
    myLibrary.map(book=>{
        const {title,author,numberOfPages}=book;
        
        const book_cards =document.querySelector(".book-cards");
        const book_card=document.createElement('div');
        book_card.classList.add('card');
        const book_title_El=document.createElement('h3')
        book_title_El.classList.add('book-title');
        book_title_El.textContent=title;
        const author_El= document.createElement('p');
        author_El.classList.add("author");
        author_El.textContent=author;
        const number_Of_Pages_El= document.createElement('p');
        number_Of_Pages_El.classList.add('numberOfPages')
        number_Of_Pages_El.textContent=numberOfPages;

        book_card.appendChild(book_title_El);
        book_card.appendChild(author_El);
        book_card.appendChild(number_Of_Pages_El);



        // book_title_El.textContent=title;    
        book_cards.appendChild(book_card);
    })
}
displayBooks();
//button to add new book
//button to remove a specific book
//toggle the books read status