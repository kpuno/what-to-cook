// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import NavBar from './components/common/NavBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}   

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;