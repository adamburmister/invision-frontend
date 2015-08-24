import React from 'react';
import { Link } from 'react-router';
import SettingsForm from '../components/SettingsForm';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container settings">
        <SettingsForm />
      </div>
    );
  }
}

export default Settings;
