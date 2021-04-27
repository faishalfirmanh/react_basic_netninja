import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

export default function Create() {

    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauhtor] = useState('');
    const [isPending, setPanding] = useState(false);
    const history = useHistory();

    const Submit=(e)=>
    {
        e.preventDefault();
        const blog = {title,body,author}; //wrap data objeckt sebelum disave
        console.log(blog);
        setPanding(true)
        fetch('http://localhost:1234/blogs',{
            method: 'POST',
            headers:{ "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('Save Blog is SuccesFull');
            setPanding(false)
           // history.go(-1); //kembali page 1 sebelumnya
           history.push('/')
        })
        .catch((err)=>{
           alert('Failed Saved',err);
        })
      
    }

    return (
        <div className="create">
            <h4>Add new blog</h4>
            <form onSubmit={Submit}>
                <label>Blog title: </label>
                <input
                    required 
                    type="text"
                    value={title}
                    onChange={(e)=> settitle(e.target.value)}
                />
                <label>Body: </label>
                <textarea 
                    value={body}
                    onChange={(e)=> setbody(e.target.value)}
                    required>
                </textarea>
                <label>Author : </label>
                <select 
                    value={author}
                    onChange={(e)=> setauhtor(e.target.value)}
                    >
                    <option value="obama">obama</option>
                    <option value="james">james</option>
                    <option value="zulfikar">zulfikar</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Add blog ...</button>}
            </form>
        </div>
    )
}
