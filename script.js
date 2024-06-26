const myLibrary=[
    {title:"Protocols: An Operating Manual for the Human Body ",
        author:" Andrew D. Huberman Ph.D.",
        numberOfPages:"384 pages"
    },
    {title:"The Housemaid Is Watching",
        author:"Freida McFadden",
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

const book_cards=document.querySelector('.book-cards');

//add new book
function addBooktoLibrary(){

}
const createCard=(title,author,numberOfPages)=>{
    const book_card=document.createElement('div');
    const book_title_El=document.createElement('h3');
    const author_El= document.createElement('p');
    const number_Of_Pages_El= document.createElement('p');

//adding classes
        book_card.classList.add('card');
        book_title_El.classList.add('book-title');
        author_El.classList.add("author");
        number_Of_Pages_El.classList.add('numberOfPages')
//appending elements to the card
        book_card.appendChild(book_title_El);
        book_card.appendChild(author_El);
        book_card.appendChild(number_Of_Pages_El);
//populate with content
        book_title_El.textContent=title;
        author_El.textContent=author;
        number_Of_Pages_El.textContent=numberOfPages;    
        

    return book_card;

}
function displayBooks(){
    myLibrary.map(book=>{
        const {title,author,numberOfPages}=book;
        const book_card=createCard(title,author,numberOfPages);
        book_cards.appendChild(book_card);
    })
}
displayBooks();
//button to add new book
//button to remove a specific book
//toggle the books read status