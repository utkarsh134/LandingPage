const Home = ()=>{
    return (
        <div className="homeContainer">
            <div className="textFrame">
                <h1>Your Feet Deserve the best</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="btn newbtn">
                    <button className="shop">Shop Now</button>
                    <button className="category">Category</button>
                </div>

                <h4>Also available on</h4>
                <div className="shopImages">
                    <img src="images/amazon.png" alt="Amazon" />
                    <img src="images/flipkart.png" alt="Flipcart" />
                </div>

            </div>
            <div className="imageFrame">
                <img src="images/hero-image.png" alt="" />

            </div>
        </div>
    )
}

export default Home ;