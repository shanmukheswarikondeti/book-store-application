import {Component} from 'react'
import Header from "../Header";
import SearchInput from '../SearchInput';
import PriceRange from '../PriceRange';
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'

import './index.css'

const apiStatusConstants={
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"IN_PROGRESS"
};

class BookList extends Component{
    state={
        apiStatus: apiStatusConstants.initial,
        
    }
    
   

    componentDidMount(){
        this.getBooks("");
    }

    getBooks=async(searchInputValue)=>{
        let apiUrl;
        this.setState({apiStatus:apiStatusConstants.inProgress});

        if(searchInputValue===""){
            apiUrl=`https://api.itbook.store/1.0/new`;
        }
        else{
            apiUrl=`https://api.itbook.store/1.0/search/${searchInputValue}`;
        }

        const response=await fetch(apiUrl);

            if(response.ok){
                const fetchedData=await response.json();
                this.setState({
                    booksData:fetchedData["books"],
                    apiStatus:apiStatusConstants.success
                },
                
                );
            }
            else{
                this.setState({apiStatus:apiStatusConstants.failure})
            }
    }
    
    renderBooksListView=()=>{

        return(
            <>
               <h1 className="book-items-heading">Books</h1>
              
            </>
        )

    }

    renderFailureView=()=>{
        <ErrorMessage/>
    }

    renderLoadingView=()=>{
        <Loader/>
    }

    renderBooks=()=>{
        const {apiStatus}=this.state;

        switch(apiStatus){
            case apiStatusConstants.success:
                return this.renderBooksListView();
            case apiStatusConstants.failure:
                return this.renderFailureView();
            case apiStatusConstants.inProgress:
                return this.renderLoadingView();
            default:
                return null;
        }
    };
    
    render(){
       

        return(
            <>
            <Header />
            <div className="book-list-container">
                <div className="book-list-content-container">
                   <SearchInput onSearchBooks={this.getBooks}/>
                   <PriceRange
                     
                   />
                   <div className="book-items-container">{this.renderBooks()}</div>
                </div>
            </div>
            </>
        )
    }

}
export default BookList;