import axios from "axios";

interface BlogPost{
   params:{
    blogId:number
   }
}

export default async function BlogPost({params}:BlogPost){

    const blogId= params.blogId;
    const url="https://jsonplaceholder.typicode.com/posts/"+blogId;

    const response=await axios({
        method:"get",
        url:url
    });
    return(
        <div>
            Hello ji
            <br />
            UserId={response.data.id}
            <br />
            Title={response.data.title}
            <br />
            Body={response.data.body}
        </div>
    )
}

// interface ParamsInt{
//     params:{
//         blogId:string
//     }
// }

// async function fetchData(blogId:string)
// {
//     const response=await axios({
//         method:"get",
//         url:"https://jsonplaceholder.typicode.com/posts/"+blogId
//     })
//     return response.data;
// }

// export default async function BlogPage({params}:ParamsInt){

//     const id=params.blogId;
//     const data=await fetchData(id)
//     console.log(id);
//     console.log(data);
//     const blogId=params.blogId;
//     return(
//         <div>
//             This is a Blog Page
//             <br />
//             {blogId}
//             {JSON.stringify(data)}
//         </div>
//     )
// }