import PersonIcon from '../../assets/icon-person.svg';
import CogIcon from '../../assets/icon-cog.svg';
import ChartIcon from '../../assets/icon-chart.svg';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact__container">
        <section className="contact__textWrap">
            <h1 className="heading">Contact</h1>
            <h2 className="heading subheading">Ask us about</h2>

            <div className="contact__list">
                <div className="contact__item">
                    <img src={PersonIcon} alt="person icon" className="contact__icon" />
                    <p className="contact__text">The quality of our talent network</p>
                </div>

                <div className="contact__item">
                    <img src={CogIcon} alt="cog icon" className="contact__icon" />
                    <p className="contact__text">Usage & implementation of our software</p>
                </div>

                <div className="contact__item">
                    <img src={ChartIcon} alt="chart icon" className="contact__icon" />
                    <p className="contact__text">How we help drive innovation</p>
                </div>
            </div>
        </section>

        <section className="contact__formWrap">
            <form action="#" className="form__container">
                
                <label htmlFor="name" className="form__label">Name</label>
                <input type="text" id="name" className="form__input" placeholder="Jane Doe" required />

                <label htmlFor="email" className="form__label">Email</label>
                <input type="email" id="email" className="form__input" placeholder="Email address" required />

                <label htmlFor="company" className="form__label">Company Name</label>
                <input type="text" id="company" className="form__input" placeholder="Company" required />

                <label htmlFor="title" className="form__label">Title</label>
                <input type="text" id="title" className="form__input" placeholder="Title" required />

                <label htmlFor="message" className="form__label">Message</label>
                <textarea id="message" className="form__input" placeholder="How can we help?" required></textarea>

                <button type="submit" className="btn btn--secondary">Submit</button>

            </form>
        </section>
    </div>
  );
};

export default Contact;
