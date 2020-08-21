const initialState = {
    sections: [{
    'Id': 1,
    'title': 'Hats',
    'imageURL': 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'linkURL': 'shop/hats'
},
{
    'Id': 2,
    'title': 'Sneakers',
    'imageURL': 'https://images.unsplash.com/flagged/photo-1576190645601-cf4c6bba6d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'linkURL': 'shop/sneakers'
},
{
    'Id': 3,
    'title': 'Jackets',
    'imageURL': 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'linkURL': 'shop/jackets'
},
{
    'Id': 4,
    'title': 'Womens',
    'imageURL': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'size': 'large',
    'linkURL': 'shop/womens'
},
{
    'Id': 5,
    'title': 'Mens',
    'imageURL': 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'size': 'large',
    'linkURL': 'shop/mens'
},

]};

const directoryReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;