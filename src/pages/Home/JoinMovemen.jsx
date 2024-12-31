
import img from '../../assets/flat-design-clothing.avif'
const JoinMovemen = () => {
    return (
        <>
          <div className="card bg-violet-200 py-3	 w-full">
          <div className="card-body text-center">
            <h2 className="text-3xl ">Join the Movement
            </h2>
            <p>Be a part of a community that cares. Whether you donate, volunteer, or spread the word, your actions create a <br/>
             ripple effect of kindness. Together, we can ensure no one faces the cold alone.

 </p>
            
          </div>
          <figure>
            <img
              src={img}
              alt="Shoes" />
          </figure>
                </div>
                    
            
        </>
    );
};

export default JoinMovemen;