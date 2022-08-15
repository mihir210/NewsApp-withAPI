import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import defaul from './default.png' 
export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  captialfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResult: 0,
    }

    document.title = `${this.captialfirst(this.props.category)} - NewsMonkey`
  }


  async componentDidMount() {
    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true })
    let data = await fetch(url);

    let parsedata = await data.json();
    this.setState({ article: parsedata.articles, totalResult: parsedata.totalResult, loading: false })
    this.props.setProgress(100);
  }


  
  
  fetchMoreData = async () =>{
    
    this.setState({page : this.state.page  + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ article: this.state.article.concat(parsedata.articles), totalResult: parsedata.totalResult, loading: false })
  }

  render() {
    return (
      <div className='container my-5'>

        <h1 className='text-center my-5'>NewsMonkey top {this.captialfirst(this.props.category)} headlines  </h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article !== this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className='row'>
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} desc={element.description ? element.description : ""} imageurl={element.urlToImage?element.urlToImage : defaul} newsid={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              )
            })}
          </div>
          </div>
        </InfiniteScroll>

      </div>

    )
  }
}
