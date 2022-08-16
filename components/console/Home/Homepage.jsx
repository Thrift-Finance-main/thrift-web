
import Headers from '../Components/Headers.jsx';
import TheHeader from '../../partials/Header';
import Hero from '../../partials/HeroHome';
import How from '../../partials/How';
import FeaturesBlocks from '../Components/TheFeatures.jsx';
import FeaturesWorld from '../Components/World';
import TheCta from '../Components/Cta'
import TheFooter from '../Components/Footer';
import TeamMembers from '../Components/TeamMembers';
import Timeline from '../../partials/Timeline';
import ThriftPeer from '../Components/ThriftPeer';
import Partners from '../Components/Partners';
import Team from '../Components/Team';
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

                   {/* <TeamMembers/> */}
                   <Team/>
                   <Partners/>
                   <TheCta/>
                   <TheFooter/>


              </center>




        </>
    )

}

export default Homepage;
