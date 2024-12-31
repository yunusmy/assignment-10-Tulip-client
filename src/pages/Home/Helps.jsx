import img1 from '../../assets/flat.avif' 
import img2 from '../../assets/drawn.avif' 
import img3 from '../../assets/volunteers-box.webp' 

const Helps = () => {
    return (
        <>
            <div className="card bg-base-100 w-full">
                <div className="card-body text-center">
                    <h2 className="text-3xl font-semibold mb-4">How Your Contribution Helps
                    </h2>
                   
                </div>

                <div className="flex flex-wrap justify-center space-x-4 py-8">
                    {/* Step 1 */}
                    <div className="card bg-base-100 w-80 shadow-xl mb-6">
                        <figure className="px-10 pt-10 text-4xl text-blue-600 font-bold">
                            <img src={img1} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-medium">Warms a Child
                            </h2>
                            <p className="text-gray-500">Your donation provides jackets, sweaters, and blankets to keep children warm during the harsh winter</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="card bg-base-100 w-80 shadow-xl mb-6">
                        <figure className="px-10 pt-10 text-4xl text-blue-600 font-bold">
                              <img src={img2} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-medium">Comforts the Elderly
                            </h2>
                            <p className="text-gray-500">Elderly people receive warm clothing and blankets to stay safe and healthy in freezing temperatures.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="card bg-base-100 w-80 shadow-xl mb-6">
                        <figure className="px-10 pt-10 text-4xl text-blue-600 font-bold">
                              <img src={img3} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl font-medium">Empowers Communities
                            </h2>
                            <p className="text-gray-500">Entire communities benefit as volunteers distribute essentials to those in need, fostering unity and care.</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
};

export default Helps;
