import React, { Component } from 'react';
import './Engagement.css';
import NamesImage from '../images/phil-and-tobias.png';
import CoupleImage from '../images/couple.png';
import CoupleBoatImage from '../images/couple-boat.png';
import MapImage from '../images/map-frame.png';
import { setDocumentTitle, setFavicon } from '../helpers/helpers';

class EngagementRSVP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      attending: 'yes',
      dietary: '',
      pizzaChoice: '',
      submitted: false
    };
    this.sectionRefs = {};
  }

  componentDidMount() {
    setDocumentTitle('RSVP • Philippa & Tobias');
    setFavicon('/favicon-rsvp.png');
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Connect your database/API logic here if needed
    console.log('RSVP Data Submitted:', this.state);
    this.setState({ submitted: true });
  };

  scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = this.sectionRefs[sectionId];

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  render() {
    const { guestName, attending, dietary, pizzaChoice, submitted } = this.state;
    const sectionLinks = [
      { id: 'when', label: 'When' },
      { id: 'where', label: 'Where' },
      { id: 'dress-code', label: 'Dress' },
      { id: 'accommodation', label: 'Stay' },
      { id: 'rsvp', label: 'RSVP' }
    ];

    return (
      <div className="rsvp-body-wrapper">
        {/* Animated Background Retro Stars */}
        <div className="retro-star star-1"></div>
        <div className="retro-star star-2"></div>
        <div className="retro-star star-3"></div>
        <div className="retro-star star-4"></div>
        <div className="retro-star star-5"></div>
        <div className="retro-star star-6"></div>

        <nav className="rsvp-section-nav" aria-label="Page sections">
          {sectionLinks.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rsvp-section-nav-link"
              onClick={(event) => this.scrollToSection(event, section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="rsvp-card">
          
          {/*<div className="rsvp-photo-container">
            <img 
              src={CoupleImage} 
              alt="Philippa & Tobias" 
              className="rsvp-photo" 
            />
          </div>*/}

          <div className="rsvp-wide-photo-container">
            <img 
              src={CoupleBoatImage} 
              alt="Philippa & Tobias" 
              className="rsvp-photo" 
            />
          </div>

          <img src={NamesImage} alt="Philippa & Tobias" className="rsvp-names-image" />
          
          <h2 className="rsvp-subtitle">Engagement & 10 Year Anniversary Celebration</h2>

          <div className="rsvp-map-frame-wrapper">
            <iframe
              className="rsvp-map"
              title="Little Nan's location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.891742375681!2d-0.023760000000000003!3d51.4785014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603134d542fb3%3A0xace771dbbb5b6e9d!2sLittle%20Nan%E2%80%99s%20Bar%202.0!5e0!3m2!1sen!2suk!4v1784473265637!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="rsvp-info-grid">
            <div className="rsvp-info-card" id="when" ref={(element) => { this.sectionRefs.when = element; }}>
              <h2 className="rsvp-section-heading">When?</h2>
              <p className="rsvp-details-text">
                <strong>19 June 2027</strong><br />
                5pm ’til late
              </p>
            </div>

            <div className="rsvp-info-card" id="where" ref={(element) => { this.sectionRefs.where = element; }}>
              <h2 className="rsvp-section-heading">Where?</h2>
              <p className="rsvp-details-text">
                <strong>Little Nan’s 2.0</strong><br />
                23-24 Resolution Way<br />
                Depford<br />
                London<br />
                SE8 4NT
              </p>
              <p className="rsvp-details-text">
                1 min walk from Deptford station (1 stop from London Bridge; 15 min walk from Greenwich).<br />
              </p>
            </div>

            <div className="rsvp-info-card" id="dress-code" ref={(element) => { this.sectionRefs['dress-code'] = element; }}>
              <h2 className="rsvp-section-heading">Dress code</h2>
              <p className="rsvp-details-text">
                None!
              </p>
            </div>
          </div>

          <div className="rsvp-info-card">
            <h2 id="accommodation" ref={(element) => { this.sectionRefs.accommodation = element; }} className="rsvp-section-heading">Accommodation</h2>
            <p className="rsvp-details-text">
              There are plenty of hotels in the area, specifically around Greenwich (1 stop, or a 15 min walk). This includes:<br />
              <a href="https://www.travelodge.co.uk/hotels/594/London-Greenwich-High-Road-hotel?checkIn=19/06/2027&checkOut=20/06/2027&rooms[0][adults]=2&rooms[0][children]=0&occr=off">Travelodge</a><br />
              <a href="https://all.accor.com/booking/en/accor/hotel/3476?dateIn=2026-08-02&nights=1&compositions=2&stayplus=false&snu=false&accessibleRooms=false&hideWDR=true&productCode=null&hideHotelDetails=true&utm_campaign=3476-GB-cpc-desktop-default-0--mapresults--0-0-0&utm_medium=partenariats&hmGUID=6c9fd325-1844-4b9d-8026-5a73c85664c7&wiz_campaign=&utm_source=seo_meta_google&basketId=861da5b0-b85c-47ce-b182-026e62f51015">Novotel</a><br />
              <a href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-greenwich.html?ARRdd=19&ARRmm=06&ARRyyyy=2027&NIGHTS=1&ROOMS=1&ADULT1=1&CHILD1=0&COT1=0&INTTYP1=DB">Premier Inn</a><br />
            </p>
          </div>

          {!submitted ? (
            <form className="rsvp-form" onSubmit={this.handleSubmit}>
              <h2 id="rsvp" ref={(element) => { this.sectionRefs.rsvp = element; }} className="rsvp-section-heading" style={{ textAlign: 'center', marginTop: 0 }}>
                Please RSVP
              </h2>

              <div className="rsvp-form-group">
                <label className="rsvp-label" htmlFor="guestName">Your Full Name(s)</label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  value={guestName}
                  onChange={this.handleInputChange}
                  className="rsvp-input"
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>

              <div className="rsvp-form-group">
                <label className="rsvp-label">Will you be joining us?</label>
                <div className="rsvp-radio-group">
                  <label className="rsvp-radio-label">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={attending === 'yes'}
                      onChange={this.handleInputChange}
                      className="rsvp-radio-input"
                    />
                    Can't wait!
                  </label>
                  <label className="rsvp-radio-label">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={attending === 'no'}
                      onChange={this.handleInputChange}
                      className="rsvp-radio-input"
                    />
                    Sadly can't make it
                  </label>
                </div>
              </div>

              {attending === 'yes' && (
                <div className="rsvp-form-group">
                  <label className="rsvp-label">Choose your pizza</label>
                  <div className="rsvp-radio-group" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                    {['Margherita', 'Mushroom', 'Pepperoni', 'Chorizo'].map((option) => (
                      <label key={option} className="rsvp-radio-label">
                        <input
                          type="radio"
                          name="pizzaChoice"
                          value={option}
                          checked={pizzaChoice === option}
                          onChange={this.handleInputChange}
                          className="rsvp-radio-input"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="rsvp-form-group">
                <label className="rsvp-label" htmlFor="dietary">Dietary Requirements / Notes</label>
                <input
                  type="text"
                  id="dietary"
                  name="dietary"
                  value={dietary}
                  onChange={this.handleInputChange}
                  className="rsvp-input"
                  placeholder="e.g. Vegetarian, None, etc."
                />
              </div>

              <button type="submit" className="rsvp-submit-btn">
                Send RSVP
              </button>
            </form>
          ) : (
            <div className="rsvp-success-msg">
              ✨ Thank you! Your RSVP response has been successfully sent. ✨
            </div>
          )}

        </div>

        <footer>
            <p className="rsvp-footer-text">website by tobias</p>
        </footer>
      </div>
    );
  }
}

export default EngagementRSVP;