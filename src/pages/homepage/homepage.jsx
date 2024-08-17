import './homepage.scss';

import Person from '../../assets/icon-person.svg';
import Cog from '../../assets/icon-cog.svg';
import Chart from '../../assets/icon-chart.svg';
import Kady from '../../assets/avatar-kady.jpg';
import Aiysha from '../../assets/avatar-aiysha.jpg';
import Arthur from '../../assets/avatar-arthur.jpg';

const Homepage = () => {
  return (
    <>
      <div className="homepage__hero">
        <h1 className="heading hero__heading">Find the best <span className="highlight">talent</span></h1>
        <p className="hero__text">Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
      </div>

      <section className="homepage__build">
        <h2 className="heading">Build & manage distributed teams like no one else.</h2>

        <div className="build__cards">
          <div className="build__card">
            <img src={Person} alt="Person icon" className="build__icon" />
            <div className="build__textWrap">
              <h3 className="build__heading">Experienced Individuals</h3>
              <p className="build__text">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </div>
          </div>

          <div className="build__card">
            <img src={Cog} alt="Cog icon" className="build__icon"/>
            <div className="build__textWrap">
              <h3 className="build__heading">Easy to Implement</h3>
              <p className="build__text">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </div>
          </div>

          <div className="build__card">
            <img src={Chart} alt="Chart icon" className="build__icon"/>
            <div className="build__textWrap">
              <h3 className="build__heading">Enhanced Productivity</h3>
              <p className="build__text">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="homepage__stories">
        <h2 className='stories__heading heading'>Delivering real results for top companies. Some of our <span className="highlight blue">success stories.</span></h2>

        <div className="stories__cards">

          <div className="stories__card">
            <p className="stories__text">"The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."</p>
            <h3 className="stories__name">Kady Baker</h3>
            <p className="stories__title">Product Manager at Bookmark</p>
            <img src={Kady} alt="Kady Baker" className="stories__img" />
          </div>

          <div className="stories__card">
            <p className="stories__text">“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            <h3 className="stories__name">Aiysha Reese</h3>
            <p className="stories__title">Founder of Manage</p>
            <img src={Aiysha} alt="Aiysha Reese" className="stories__img" />
          </div>

          <div className="stories__card">
            <p className="stories__text">“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success and we’ve already received rave reviews.”</p>
            <h3 className="stories__name">Arthur Clarke</h3>
            <p className="stories__title">Co-founder of MyPhysio</p>
            <img src={Arthur} alt="Arthur Clarke" className="stories__img" />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Homepage;
