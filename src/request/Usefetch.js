
import {useState, useEffect} from 'react';
const Usefetch =(url)=>{

  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, seterror] = useState(false)

    useEffect(()=>{
        //untuk membatalkan tugas-tugas asinkronus
        const abortCont = new AbortController(); 

        setTimeout(() => {
        
            fetch(url, {signal: abortCont.signal})
            .then(res=>{
            if (!res.ok) {
                throw Error('jaringan bermasalah netowk error')
            }
                return res.json()
            })
            .then(data =>{
                setData(data)
                setisPending(false)
            })
            .catch(err=>{
                if (err.name === 'AbortError') 
                {    //ketika compoenen belum selsai dirender yg home
                    console.log('abbor fetch error');    
                }
                else
                {
                    setisPending(false);
                    seterror(true);
                }
               
            })
        }, 2000);
        return ()=> abortCont.abort();
      },[url])
    
      return {data, isPending, error}
}

export default Usefetch;