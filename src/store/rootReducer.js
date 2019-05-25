const initialState = {
  sortingType: "name",
  currentView: "list",
  selectedWineId: "1",
  wines: [
    {
     id: 1,
     name: "Super fancy wine",
     vineyard: "FancyLand",
     year: "1990",
     rating: 5,
     comments: ""
    },
    {
      id: 2,
      name: "Tas-y wine",
      vineyard: "Republic of Y",
      year: "1500",
      rating: 2,
      comments: ""
     },
     {
      id: 4,
      name: "Yummy",
      vineyard: "i can't believe this is a vineyard",
      year: "1990",
      rating: 3,
      comments: ""
     },
     {
      id: 5,
      name: "The one wine",
      vineyard: "Middle-earth",
      year: "250",
      rating: 5,
      comments: "A wine to rule them all"
     }
  ]

};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;