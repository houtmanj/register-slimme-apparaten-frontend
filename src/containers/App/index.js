import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { Header } from '@datapunt/asc-ui';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import MapInteractive from 'components/MapInteractive';
import ContactForm from 'pages/ContactForm';
import Categories from 'pages/DeviceCategories';
import About from 'pages/About';
import FAQ from 'pages/FAQ';
import NotFoundPage from 'containers/NotFoundPage';
import Footer from 'components/Footer';

import reducer from './reducer';
import saga from './saga';

const withContainer = Component => () => (
  <div className="content container-fluid">
    <div className="container app-container">
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-1 col-md-8">
          <Component />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const App = () => (
  <Fragment>
    <Header
      tall={false}
      title="Register slimme apparaten"
      homeLink="/"
      fullWidth
    ></Header>
    <Switch>
      <Route exact path="/" component={MapInteractive} />
      <Route
        path="/contact-owner/:deviceId/"
        component={withContainer(ContactForm)}
      />
      <Route path="/categories" component={() => withContainer(Categories)} />
      <Route path="/about/faq" component={withContainer(FAQ)} />
      <Route path="/about" component={withContainer(About)} />
      <Route path="" component={withContainer(NotFoundPage)} />
    </Switch>
  </Fragment>
);

// const withConnect = connect(mapStateToProps, mapDispatchToProps);
// changed key to global
const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withReducer,
  withSaga
  // withConnect,
)(App);
