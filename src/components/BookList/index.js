import {Component} from 'react'
import Header from "../Header";
import SearchInput from '../SearchInput';
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'

import './index.css'

class BookList extends Component{
    render(){
        return(
            <>
            <Header />
            <div className="book-list-container">
                <div className="book-list-content-container">
                   <SearchInput/>
                   <Loader/>
                   <ErrorMessage/>
                </div>
            </div>
            </>
        )
    }

}
export default BookList;