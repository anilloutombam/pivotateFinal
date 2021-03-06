/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Modal from '../../Modal';
import InitialDevelopment from './Modals/initial-development';
import ServiceDetails from './Modals/pivoting-services-details';
import MaintenanceDetails from './Modals/maintenance-details';

class Pricing extends Component {
  state = {
    modalInitDev: false,
    modalMaintenance: false,
    modalServices: false,
  };

  componentDidMount() {
    const values = 'initial-development';
    switch (values.modal) {
      case 'initial-development':
        this.modalToggleInitDev();
        break;
      case 'maintenance':
        this.modalToggleMaintenance();
        break;
      case 'services':
        this.modalToggleServices();
        break;
      default:
        break;
    }
  }

  signUp = () => {
    this.props.onSignUp();
    this.modalToggleInitDev();
  };

  modalToggleInitDev = () => {
    this.setState({
      modalInitDev: !this.state.modalInitDev,
    });
    if (!this.state.modalInitDev) {
      this.props.history.push({
        search: `?${new URLSearchParams({
          modal: 'initial-development',
        }).toString()}`,
      });
    } else {
      this.props.history.push({
        search: `?${new URLSearchParams().toString()}`,
      });
    }
  };

  modalToggleMaintenance = () => {
    this.setState({
      modalMaintenance: !this.state.modalMaintenance,
    });
    if (!this.state.modalServices) {
      this.props.history.push({
        search: `?${new URLSearchParams({ modal: 'maintenance' }).toString()}`,
      });
    } else {
      this.props.history.push({
        search: `?${new URLSearchParams().toString()}`,
      });
    }
  };

  modalToggleServices = () => {
    this.setState({
      modalServices: !this.state.modalServices,
    });
    if (!this.state.modalServices) {
      this.props.history.push({
        search: `?${new URLSearchParams({ modal: 'services' }).toString()}`,
      });
    } else {
      this.props.history.push({
        search: `?${new URLSearchParams().toString()}`,
      });
    }
  };

  render() {
    return (
      <>
        <section className='pricing__section triangle triangle--teal'>
          <div className='container'>
            <h1 className='display-2  has--underline'> SERVICES OFFERED </h1>
            <p>
              Pay only for what you need, when you need it. Prices are subject
              to change.
            </p>
          </div>
        </section>
        {/* Initial Development */}
        <section id='initial-development'>
          <div className='container'>
            <h2 className='text-center'>
              <span className='headline headline--teal'>
                {' '}
                INITIAL DEVELOPMENT
              </span>
            </h2>

            <div className='subheadline text-center'>Get it live!</div>
            <div className='flex justify-center'>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Initial consultation'
                    src='https://pivotatestaticassets.com/images/pricing/Initial consultation.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>
                    Initial consultation
                  </div>

                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>FREE</strong>
                  </div>
                </div>
              </div>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Initial App Package'
                    src='https://pivotatestaticassets.com/images/pricing/Discounted Initial App Package.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>
                    Discounted Initial App Package
                  </div>
                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>$240</strong>
                  </div>
                  <div>
                    <small> per user type </small>
                  </div>
                </div>
              </div>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Graphic Design'
                    src='https://pivotatestaticassets.com/images/pricing/Graphic design.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>Graphic design</div>
                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>$30</strong>
                  </div>
                </div>
              </div>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Development'
                    src='https://pivotatestaticassets.com/images/pricing/Development.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>Development</div>
                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>$30</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className='pricing__detail flex justify-center'>
              <div
                role='presentation'
                onClick={this.modalToggleInitDev}
                className='button button--rounded button--yellow flex justify-center items-center'
              >
                GET DETAILS
                <img
                  alt='External Link'
                  className='pricing__icon'
                  src='https://pivotatestaticassets.com/images/pricing/external link.png'
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Initial Development */}

        {/* Pivotating Services */}
        <section className='pivoting-services  triangle--grey triangle triangle--white triangle'>
          <div className='container'>
            <h2 className='text-center'>
              <span className='headline headline--teal'>
                {' '}
                PIVOTING SERVICES
              </span>
            </h2>
            <div className='subheadline text-center'>Get it right! </div>

            <div className='flex justify-center'>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Graphics'
                    src='https://pivotatestaticassets.com/images/pricing/Graphics.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>Graphics</div>
                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>$2-$15</strong>
                  </div>
                  <div>
                    {' '}
                    <small> per screen </small>
                  </div>
                </div>
              </div>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Content'
                    src='https://pivotatestaticassets.com/images/pricing/Content.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>Content </div>
                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>$2-$90</strong>
                  </div>
                </div>
              </div>

              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Services'
                    src='https://pivotatestaticassets.com/images/pricing/Special Services.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>Special Services</div>
                  <div>
                    <small> starting from </small>
                  </div>
                  <div className='pricing__price teal--text'>
                    <strong className='teal--text'>$30</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className='pricing__detail flex justify-center'>
              <span
                role='presentation'
                onClick={this.modalToggleServices}
                className='button button--rounded button--yellow flex justify-center items-center'
              >
                GET DETAILS
                <img
                  className='pricing__icon'
                  alt='External Link'
                  src='https://pivotatestaticassets.com/images/pricing/external link.png'
                />
              </span>
            </div>
          </div>
        </section>
        {/* End Pivotaing Services */}

        {/* Maintenance */}
        <section id='pivoting-services'>
          <div className='container'>
            <h2 className='text-center'>
              <span className='headline headline--teal word-break'>
                {' '}
                MAINTENANCE
              </span>
            </h2>
            <div className='subheadline text-center'>Keep it up!</div>
            <div className='flex justify-center'>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Maintance'
                    src='https://pivotatestaticassets.com/images/pricing/Basic maintenance.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>Basic maintenance</div>
                  <div className='pricing__price'>
                    <strong className='teal--text'>$45 </strong>
                    <small>/month </small>
                  </div>
                </div>
              </div>
              <div className='grow-3 pricing'>
                <figure className='pricing__img'>
                  <img
                    alt='Additional Cloud'
                    src='https://pivotatestaticassets.com/images/pricing/Additional Cloud.png'
                  />
                </figure>
                <div className='pricing__content'>
                  <div className='pricing__description'>
                    Special Cloud Services
                  </div>
                  <div className='pricing__price'>
                    <strong className='teal--text'>At cost</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className='pricing__detail flex justify-center'>
              <span
                onClick={this.modalToggleMaintenance}
                role='presentation'
                className='button button--rounded button--yellow flex justify-center items-center'
              >
                GET DETAILS
                <img
                  alt='pricing icon'
                  className='pricing__icon'
                  src='https://pivotatestaticassets.com/images/pricing/external link.png'
                />
              </span>
            </div>
          </div>
        </section>
        {/* End Maintenance */}

        {this.state.modalInitDev && (
          <Modal fullScreen onClose={this.modalToggleInitDev}>
            <InitialDevelopment onSignUp={this.signUp}> </InitialDevelopment>
          </Modal>
        )}
        {this.state.modalMaintenance && (
          <Modal fullScreen onClose={this.modalToggleMaintenance}>
            <MaintenanceDetails> </MaintenanceDetails>
          </Modal>
        )}
        {this.state.modalServices && (
          <Modal fullScreen onClose={this.modalToggleServices}>
            <ServiceDetails> </ServiceDetails>
          </Modal>
        )}
      </>
    );
  }
}

export default Pricing;
