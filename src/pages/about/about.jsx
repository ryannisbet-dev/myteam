import './about.scss';
import Client1 from '../../assets/logo-the-verge.png';
import Client2 from '../../assets/logo-jakarta-post.png';
import Client3 from '../../assets/logo-the-guardian.png';
import Client4 from '../../assets/logo-tech-radar.png';
import Client5 from '../../assets/logo-gadgets-now.png';

import Nikita from '../../assets/avatar-nikita.jpg';
import Christian from '../../assets/avatar-christian.jpg';
import Cruz from '../../assets/avatar-cruz.jpg';
import Drake from '../../assets/avatar-drake.jpg';
import Griffin from '../../assets/avatar-griffin.jpg';

import DirectorsCard from '../../components/directors-card/directors-card';

const About = () => {
  return (
    <>
        <section className="about__hero">
            <h1 className="heading about__heading">About</h1>
            <p className="hero__text about__text">We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </section>    

        <section className="about__directors">
            <h2 className="heading about__heading">Meet the directors</h2>
            <div className="directors__cards">
                <DirectorsCard
                    id="director1"
                    avatar={Nikita}
                    name="Nikita Marks"
                    title="Founder & CEO"
                    quote="It always amazes me how much talent there is in every corner of the globe."
                />

                <DirectorsCard
                    id="director2"
                    avatar={Christian}
                    name="Christian Watts"
                    title="Co-founder & COO"
                    quote="Distributed teams required unique processes. You need to approach work in a new way."
                />

                <DirectorsCard
                    id="director3"
                    avatar={Cruz}
                    name="Cruz Hamer"
                    title="Co-founder & CTO"
                    quote="Technology is at the forefront of enabling distributed teams. That's where we come in."
                />

                <DirectorsCard
                    id="director4"
                    avatar={Drake}
                    name="Drake Heaton"
                    title="Business Development Lead"
                    quote="Hiring similar people from similar backgrounds is a surefire way to stunt innovation."
                />

                <DirectorsCard
                    id="director5"
                    avatar={Griffin}
                    name="Griffin Wise"
                    title="Lead Creative"
                    quote="Unique perspectives shape unique products."
                />
            </div>
        </section>

       

        <section className="about__clients">
            <h2 className="heading about__heading">Some of our clients</h2>
            <div className="clients__logos">
                <img src={Client1} alt="The Verge logo" className="clients__logo" />
                <img src={Client2} alt="The Jakarta Post" className="clients__logo" />
                <img src={Client3} alt="The Guardian" className="clients__logo" />
                <img src={Client4} alt="Techradar" className="clients__logo" />
                <img src={Client5} alt="Gadgetsnow" className="clients__logo" />
            </div>
        </section>
    </>
  );
};

export default About;
