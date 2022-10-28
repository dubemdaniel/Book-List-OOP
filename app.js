class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }

}

class UI {
    addBookToList(book){
        const list = document.getElementById('table-body')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class='delete'>
            <img id='delete' src="/icons8-remove-100.png" alt="">
             </td>

        `
        // <i class="fa-solid fa-trash-xmark"></i>

        list.appendChild(row)
    }

    clearList(){
        document.getElementById('book-title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

    removeBook(target){
        if (target.id === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

    validate(message , className){
        const div = document.createElement('div')

        div.className = `notify ${className}`

        div.append(document.createTextNode(message))

        const wrapper = document.querySelector('.wrapper')

        const form = document.getElementById('form')

        wrapper.insertBefore(div, form)

        setTimeout(() => {document.querySelector('.notify').remove()}, 3000)

    }
}


document.getElementById('form').addEventListener('submit', (e) => {
    // naming the book variables
    const title = document.getElementById('book-title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    // instantiate the book and the ui object

    const book = new Book(title, author, isbn)

    const ui = new UI()

    // validating the inputs
    if(title === '' || author === '' || isbn === ''){
        ui.validate('please complete the details...', 'failure')
    } else {

        ui.validate('Book Added Successfully', 'success')
         // calling my methods

        ui.addBookToList(book)

        ui.clearList()

        e.preventDefault
    }

   
})

document.getElementById('table-body').addEventListener('click', (e) => {
    const ui = new UI()

    ui.removeBook(e.target)

    ui.validate('Book Removed successfully', 'success')

    e.preventDefault
})