
import Headers from '../Components/Headers.jsx';
import TheHeader from '../../src/partials/Header';
import Hero from '../../src/partials/HeroHome';
import How from '../../src/partials/How';
import FeaturesBlocks from '../Components/TheFeatures.jsx';
import FeaturesWorld from '../Components/World';
import TheCta from '../Components/Cta'

import TheFooter from '../Components/Footer';
import TeamMembers from '../Components/TeamMembers';
const Homepage = () => {


    return (
        <>


                
              <center>
                  <TheHeader/>
                   <Hero />
                   <How />
                   <FeaturesBlocks/>
                   <FeaturesWorld/>
                   <TeamMembers/>
                   <TheCta/>
                   <TheFooter/>
                  
                  
              </center>
              
                
            

        </>
    )

}

export default Homepage;