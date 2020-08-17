const apiKey = '95A_4J0_whdWO3j7Y2AHGk5_oEq7WmiQUaQod8ri0DeVd0xFuJLxMT5R1j0upFmpD0Y6w97LAZz5Dek6-nIfEycSaU7VBy-3fzNp7koNMj41A52DYupfSqAqh5f9XnYx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json(); 
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) =>  ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        })
    },
}

export default Yelp;

