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

    
}