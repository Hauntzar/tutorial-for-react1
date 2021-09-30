import NewMeetupForm from "../components/meetups/NewMeetupForm"
import {useHistory} from 'react-router-dom';

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        console.log('working')
        fetch('https://tutorial-meetups-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST', // method: 'GET' is the default
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'// .json for firebase (required)
            } // may need to listen to success and error cases
        }).then(() =>{
            // history.push() push a new page onto a stack of pages (navigate away with back button)
            history.replace('/'); // navigate away without back button
        }); 
        // need to send a post request to store data


    }


    return (
    <section>
        <h1>Add New Meetup</h1>
        

            <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>)
}

export default NewMeetupsPage