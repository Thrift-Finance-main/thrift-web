
import Headers from '../Components/Headers.jsx';
import TheHeader from '../../src/partials/Header';
import Hero from '../../src/partials/HeroHome';
import How from '../../src/partials/How';
import FeaturesBlocks from '../Components/TheFeatures.jsx';
import FeaturesWorld from '../Components/World';
import TheCta from '../Components/Cta'
import TheFooter from '../Components/Footer';
import TeamMembers from '../Components/TeamMembers';
import Timeline from '../../src/partials/Timeline';

const Homepage = () => {


    return (
        <>


                
              <center>
                  <TheHeader/>
                   <Hero />
                   <How />
                   <FeaturesBlocks/>
                   <Timeline/>
                   <FeaturesWorld/>
                  
                   <TeamMembers/>
                   <TheCta/>
                   <TheFooter/>
                  
                  
              </center>
              
                
            

        </>
    )

}

export default Homepage;