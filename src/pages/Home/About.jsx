
import img from '../../assets/aboutImg.webp'
const About = () => {
    return (
        <div>
            <div className="card bg-violet-200 w-full py-3">
  <div className="card-body text-center">
    <h2 className="text-3xl ">About Our Mission</h2>
    <p>As winter tightens its grip, thousands of underprivileged individuals across Bangladesh face the cold without <br/> adequate clothing. Our mission is to bring warmth and comfort to those in need by connecting generous donors <br/> with dedicated volunteers.</p>
    <p>This platform allows you to make a real difference in the lives of the vulnerable. With your help, we can distribute <br/> 
    jackets, blankets, and sweaters to communities that need them most. Together, we can ensure no one is left
    <br/> shivering in the cold.</p>
  </div>
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
        </div>
            
        </div>
    );
};

export default About;