import {useParams, useHistory} from 'react-router-dom'; 
import Usefetch from '../request/Usefetch';

const Blogdetail = () => {
    const {idBlog}=useParams()
    const {data, isPending, error} = Usefetch(`http://localhost:1234/blogs/${idBlog}`);
    const history = useHistory();

    const DeleteBlog=()=>{
        fetch(`http://localhost:1234/blogs/${idBlog}`,{
            method:'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
    }

    return (  
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <h4 style={{color:'red'}}> !! Request to Server Error !!</h4>} 
            {
                data &&
                (
                    <article>
                        <h2>{data.title}</h2>
                        <sub style={{
                           marginLeft:-450,
                           color:'blue'
                        }}> written by : {data.author}</sub>
                        <div style={{marginTop:30}}>{data.body}</div>
                        <button onClick={DeleteBlog}>Delete</button>
                    </article>
                )   
            }
        </div>
    );
}
 
export default Blogdetail;