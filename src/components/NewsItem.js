import React from 'react'

const NewsItem  = (props) => {

    let {title, desc, imageurl, newsid, author, date, source} = props;
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>
      <img src={imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title} <span className="badge text-bg-primary">{source}</span></h5>
        <p className="card-text">{desc}</p>
        <p className="card-text"><small className="text-primary">By  {author?author:"Unknown"}  on {new Date(date).toUTCString()}</small></p>
        <a href={newsid} className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div></div>
    )
}

export default NewsItem