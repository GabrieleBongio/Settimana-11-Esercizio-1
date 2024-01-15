const favouritesReducers = (state = { favourites: [] }, action) => {
  const favourites = state.favourites;

  switch (action.type) {
    case "ADD_FAVOURITES":
      console.log("Company added successfully!!");
      favourites.push(action.payload);
      return { favourites: favourites };
    case "REMOVE_FAVOURITES":
      console.log("Company removed successfully!!");
      const index = favourites.findIndex((elem) => elem === action.payload);
      favourites.splice(index, 1);
      return { favourites: favourites };
    default:
      console.log("Something went wrong");
      return state;
  }
};

export default favouritesReducers;
