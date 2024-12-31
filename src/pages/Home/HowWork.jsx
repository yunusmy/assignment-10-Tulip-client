const HowWork = () => {
    return (
        <>
            <div className="card bg-base-100 w-full">
                <div className="card-body text-center">
                    <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600">Follow these simple steps to donate and make a difference in someone's life.</p>
                </div>

                <div className="flex flex-wrap justify-center space-x-4 py-8">
                    {/* Step 1 */}
                    <div className="card bg-base-100 w-80 shadow-xl mb-6">
                        <figure className="px-10 pt-10 text-4xl text-blue-600 font-bold">
                            1
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-medium">Register or Login</h2>
                            <p className="text-gray-500">Create an account or log in using your email or Google to start donating.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="card bg-base-100 w-80 shadow-xl mb-6">
                        <figure className="px-10 pt-10 text-4xl text-blue-600 font-bold">
                            2
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-medium">Choose a Campaign</h2>
                            <p className="text-gray-500">Browse through our active campaigns to find one you'd like to support.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="card bg-base-100 w-80 shadow-xl mb-6">
                        <figure className="px-10 pt-10 text-4xl text-blue-600 font-bold">
                            3
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-medium">Donate Items</h2>
                            <p className="text-gray-500">Fill out the donation form with details like items, quantity, and pickup location.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="pb-3 text-center">
                 <button className="btn btn-primary">Donate Now</button>
                 </div>
            </div>
        </>
    );
};

export default HowWork;
