import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.date}</h1>
            <h2>{post.name}</h2>
            <h2>{post.time}</h2>
            <h2>{post.phone_number}</h2>
            <h2>{post.number_of_customers}</h2>
        </Link>
    </div>
}

export default Post;