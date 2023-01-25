import { useEffect, useState } from "react";
import BlogList from "./bloglist";
import useFetch from "./usefetch"

const Home = () => {
    
    const {data: blogs, isPending, error}= useFetch("http://localhost/8000");

    return (
        <div className="home">
            {isPending && <div>Loading....</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
           {/* <button onClick={()=> setName('lufid')}></button> */}
        </div>
     );
}
 
export default Home;