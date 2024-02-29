import {Component} from 'react'
import Header from "../Header";
import SearchInput from '../SearchInput';

import './index.css'

class BookList extends Component{
    render(){
        return(
            <>
            <Header />
            <div className="book-list-container">
                <div className="book-list-content-container">
                   <SearchInput/>
                </div>
            </div>
            </>
        )
    }

}
export default BookList;