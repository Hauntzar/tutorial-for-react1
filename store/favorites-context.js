import {createContext, useState} from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); // javascript object // capital character for components

export function FavoritesContextProvider (props) {

    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {

        setUserFavorites((prevUserFavorites) => { // the function automatically takes in the previous state
            return (prevUserFavorites.concat(favoriteMeetup))
        })

    }

    function removeFavoriteHandler(meetupId) {

        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId); // map meetup , return true to put in array
        })

    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id  == meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }

    return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
    )
}

export default FavoritesContext;