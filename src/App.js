import React from "react";


function Food({name, picture}){
    return (
        <div>
            <h3>I Like {name}</h3>
        </div>
    )
}

const foodLike = [
    {
        name: "chicken",
        image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMjRfMTgz%2FMDAxNjE0MTc0MTcyNjg0.G97j4rSwS2qxPl1V_4vMufkkx3KElETVnpQNLAAvuLUg.WWp16DTCVimQQy5jIx6t-oLzNdJqMx4eXK8VYpKDeoEg.JPEG.gus0451%2FIMG_2236.JPG&type=a340",

    }
]

function App() {
    return  (
    <div>
        {foodLike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
    );
 }
 

export default App;
