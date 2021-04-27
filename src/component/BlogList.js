import { Link } from "react-router-dom"

 

export default function BlogList({porpBlog, title}) {
    
   
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {porpBlog.map((bloggs)=>(
                <div className="blog-preview" key={bloggs.id}>
                    <Link to={`/blogs/${bloggs.id}`}>
                    <h2>{bloggs.title}</h2>
                    <p>written by {bloggs.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}
