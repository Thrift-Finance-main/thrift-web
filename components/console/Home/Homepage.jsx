
import Headers from '../Components/Headers.jsx';
import TheHeader from '../../src/partials/Header';
import Hero from '../../src/partials/HeroHome';
import How from '../../src/partials/How';
import FeaturesBlocks from '../Components/TheFeatures.jsx';
import FeaturesWorld from '../Components/World';

const Homepage = () => {


    return (
        <>


                
              <center>
                  <TheHeader/>
                   <Hero />
                   <How />
                   <FeaturesBlocks/>
                   <FeaturesWorld/>
                  
                  
              </center>
              
                
            

        </>
    )

}

export default Homepage;