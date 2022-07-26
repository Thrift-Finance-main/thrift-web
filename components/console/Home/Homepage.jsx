
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
import ThriftPeer from '../Components/ThriftPeer';
import Partners from '../Components/Partners';

const Homepage = () => {


    return (
        <>


              <TheHeader/>
              <center>
                  
                   <Hero />
                   <How />
                   <FeaturesBlocks/>
                   <ThriftPeer/>
                   <Timeline/>
                   <FeaturesWorld/>
                  
                   <TeamMembers/>
                    <Partners/>
                   <TheCta/>
                   <TheFooter/>
                  
                  
              </center>
              
                
            

        </>
    )

}

export default Homepage;