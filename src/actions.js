import url from "./url"
import {redirect} from "react-router-dom"

// Create Action for Creating Reservs
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newReserv = {
        date: formData.get("date"),
        name: formData.get("name"),
        time: formData.get("time"),
        phone_number: formData.get("phone_number"),
        number_of_customers: formData.get("number_of_customers")
    }

    // make a request to create a reserv
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newReserv)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating Reservs
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated reserv
    const updatedReserv = {
        date: formData.get("date"),
        name: formData.get("name"),
        time: formData.get("time"),
        phone_number: formData.get("phone_number"),
        number_of_customers: formData.get("number_of_customers")
    }

    // make a request to update a reserv
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedReserv)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting Reservs
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a reserv
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}