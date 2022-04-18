export const state = {
    user: {},
    listings: [
        {
            id: 0,
            name: "Thai Kun",
            description: "Resturant",
            hours: "11am - 9pm",
            location: {
                address: '11601 Rock Rose Ave, Austin, TX 78758',
                lat: 30.402434251642788,
                lng:   -97.72232900489499,
            }
        },
        {
            id: 1,
            name: "Ramen Tatsu-Ya",
            description: "Resturant",
            hours: "11am - 10pm",
            location: {
                address: '1234 S Lamar Blvd, Austin, TX 78704',
                lat: 330.254753276173687,
                lng:  -97.76317119581324,
            }
        },
    ],
    map: {
        lat: 0,
        lng: 0
    },
    mapOps: {
        key: "AIzaSyB7FA3yrzCnOj9kwX7UU7Zz1DJJiHfgYQQ",
        zoom: 11
    }
  }