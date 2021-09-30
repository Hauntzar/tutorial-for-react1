import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);

    let content;

    if (favoritesContext.totalFavorites === 0){
        content = <p>No current favorites. Start adding some?</p>
    }
    else {
        content = <MeetupList meetups={favoritesContext.favorites}></MeetupList>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )

}

export default FavoritesPage