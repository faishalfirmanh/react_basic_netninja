
import BlogList from '../component/BlogList';
import Usefetch from '../request/Usefetch';


const Home = ()=>{

//   useEffect(()=>{
//       console.log('use effect');
//   },[hewan])
  //penambahan [] unutk dirender pertama kali,
  // kalau  tidak ditmbhkn [arry kosing], ketika perubahan akan dirender ulang. 
  //kalau arraykosong tadi diisi state, [hewan], kalau perubahan state hewan, 
  //makan akan dirender,selain [hewan], tidak

  const {data:blog, isPending, error} = Usefetch('http://localhost:1234/blogs');
 

    return(
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {error && <h4 style={{color:'red'}}>!! error network cek server !!</h4>}
            {
             blog &&
             <BlogList porpBlog={blog}  title="All blogs ...!"/>
            }
            
            {/* <BlogList porpBlog={blog.filter((blg)=> blg.author === 'james')} title="Title Robert"/> */}
        </div>
    );
}

export default Home;