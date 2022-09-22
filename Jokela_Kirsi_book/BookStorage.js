'use strict';

module.exports = class BookStorage{
    constructor(data){
        if(!data) throw new Error('data storage missing');
        this.bookData=data;
    }

    getAllBooksByAuthor(author) {
        let foundAuthors=[];
        if (!author) throw new Error('missing parameter')
        foundAuthors = this.bookData.filter((book) => {
            return book.author === author; 
        })
        return foundAuthors;
    } 
    // end of getAllBooksByAuthor

    getBookGenres(bookNumber){
        const found = [];
        for (let book of this.bookData) {
            if(book.bookNumber === bookNumber) {
                for(let genre of book.genres){
                        found.push(genre)
                }                
            }
        }
        return found;
    }
    // end of getBookGenres

    getInfo(bookNumber){
        for (let book of this.bookData) {
            if (book.bookNumber === bookNumber) {
                return book.info;
            } 
        }
        return null;
    }
    // end of getInfo

    // Assuming we are looking for total price of one of each book by author, not the total cost of the entire stock

    getTotalPriceOfBooksByAuthor(author){
        if (!author) throw new Error('missing parameter')
        let sum = 0;
        let foundAuthor = false;
        for(let book of this.bookData) {
            if(book.author === author) {
                    foundAuthor = true;
                    sum += book.price;          
            }   
        }
        if(sum>0){
            return sum;
        }
        if(foundAuthor === false) {
            return 'nothing found with given'
        } 
    }
    // end of getTotalPriceOfBooksByAuthor

    getPrice(bookNumber){
        for (let book of this.bookData) {
            if (book.bookNumber === bookNumber) {
                return book.price;
            } 
        }
        return 'nothing found with given';
    }//end of getPrice
    
    
} // end of class