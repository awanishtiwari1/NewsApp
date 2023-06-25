import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:8,
    category: 'general'
  }

  static propTypes =
  {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
    constructor(props)
    {
        super(props);
        this.state = {
            articles:[],
            loading:false,
            page:1,
            totalResults:0

        }
    }

      async updateNews(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=825a41c8153b4055ba517e9472704776&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles : parsedData.articles,
          loading:false,
          totalResults: parsedData.totalResults
         })


      }


    handleNextClick = async() =>
    {


          // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
          // {
          //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=825a41c8153b4055ba517e9472704776&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
          //   let data = await fetch(url);
          //   this.setState({loading:true});
          //   let parsedData = await data.json();
          //   this.setState({
          //     page : this.state.page + 1,
          //     articles : parsedData.articles,
          //     loading:false
          //   })
          // }
          
      this.setState({page:this.state.page+1})
        this.updateNews();
      

    }


    fetchMoreData = async () => {
      this.setState({page:this.state.page+1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=825a41c8153b4055ba517e9472704776&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles : this.state.articles.concat(parsedData.articles),
        loading:false,
        totalResults: parsedData.totalResults
       })
    };
    handlePrevClick = async () =>
    {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=825a41c8153b4055ba517e9472704776&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({
      //   page : this.state.page - 1,
      //   articles : parsedData.articles,
      //   loading:false
      //  })
      this.setState({page:this.state.page-1})
      this.updateNews();
    }

    async componentDidMount()
    {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=825a41c8153b4055ba517e9472704776&pageSize=${this.props.pageSize}`;
      // this.setState({loading:true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({articles : parsedData.articles,
      //   totalResults:parsedData.totalResults,
      //   loading:false
      // })
      this.updateNews();
    }
  render() {
    return (
  
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'20px:0px' ,color:'yellow'}}>News Headlines on {this.props.category} </h1>
        {this.state.loading && <Spinner/>}


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          
        <div className='row' style={{overflow: 'hidden'}}>
        {this.state.articles.map((element) => {
          return  <div className='col-md-3 my-1' key ={element.url}>
          <Newsitem  title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl ={element.urlToImage} newsUrl={element.url}
          author={element.author} date={element.publishedAt} source = {element.source.name.slice(0,16)}
          />
          </div>
        })}
           
        </div>
        </InfiniteScroll>
       {/* <div className='container d-flex justify-content-between'>
       <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick } className="btn btn-dark"> &larr;Previous</button>
       <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick } className="btn btn-dark">Next &rarr; </button>
       </div> */}
      </div>
   
    )
  }
}

export default News
