import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';
import "../styles.scss";

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const reservs = useLoaderData()

    // map over the todos and create a Post component for each reserv
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a reservation</h2>
        <Form method="post" action="/create">
            <input type="text" name="date" placeholder="Date"/>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="time" placeholder="Time"/>
            <input type="text" name="phone_number" placeholder="Phone Number"/>
            <input type="text" name="number_of_customers" placeholder="Number Of Customers"/>
            <button>Create a new reservation</button>
        </Form>
    </div>
    {reservs.map((reserv) => <Post key={reserv.id} post={reserv}/>)}
    </>

}

export default Index;