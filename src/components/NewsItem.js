import React from 'react'

const NewsItem  = (props) => {

    let {title, desc, imageurl, newsid, author, date, source} = props;
    return (
      <div className='card h-100 hoe' style={{width: "18rem"}}>
        
        {/* <div className="card hoe" style={{width: "18rem"}}> */}
      <img src={imageurl} className="card-img-top" alt="..."/>
      <hr />
      <div className="card-body">
        <h5 className="card-title">{title} <span className="badge text-bg-primary">{source}</span></h5>
        <p className="card-text">{desc}</p>
        
        <a href={newsid} className="btn btn-sm btn-dark stretched-link">Read More</a>
        <div className="card-footer mt-5"><small className="text-muted">By  {author?author:"Unknown"}  on {new Date(date).toUTCString()}</small></div>
      </div>
    </div>
    // </div>
    )
}

export default NewsItem