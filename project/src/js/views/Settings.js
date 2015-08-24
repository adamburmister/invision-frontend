import React from 'react';
import { Link } from 'react-router';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container settings">
        <form className="settings--form">
          <h1>Settings</h1>

          <fieldset>
            <legend>Account</legend>
            <div className="settings--avatar">

            </div>
            <div className="settings--login">
              Name
              Email
              Password
              Change
            </div>
          </fieldset>

          <fieldset>
            <legend>Notifications</legend>
            <div className="toggle-switch">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1"></label>
            </div>
            <label htmlFor="check1">email me when my posts are marked as favorites</label>

            <div className="toggle-switch">
              <input type="checkbox" id="check2" />
              <label htmlFor="check2"></label>
            </div>
            <label htmlFor="check2">email me when I'm mentioned</label>

            <div className="toggle-switch">
              <input type="checkbox" id="check3" />
              <label htmlFor="check3"></label>
            </div>
            <label htmlFor="check3">email me when I get a reply</label>

            <div className="toggle-switch">
              <input type="checkbox" id="check4" />
              <label htmlFor="check4"></label>
            </div>
            <label htmlFor="check4">email me when someone follows me</label>

          </fieldset>

          <fieldset>
            <legend>Privacy</legend>
            <div className="radio-group">
              <p>
                <label className="radio">
                  <input type="radio" name="tagging" /> allow anyone to tag me
                </label>
              </p>
              <p>
                <label className="radio">
                  <input type="radio" name="tagging" /> only allow people I follow to tag me
                </label>
              </p>
              <p>
                <label className="radio">
                  <input type="radio" name="tagging" /> don't allow anyone to tag me
                </label>
              </p>
            </div>

            <div className="toggle-switch">
              <input type="checkbox" id="check5" />
              <label htmlFor="check5"></label>
            </div>
            <label htmlFor="check5">add a location to my posts</label>

            <div className="toggle-switch">
              <input type="checkbox" id="check6" />
              <label htmlFor="check6"></label>
            </div>
            <label htmlFor="check6">let others find me by email address</label>

            <div className="toggle-switch">
              <input type="checkbox" id="check7" />
              <label htmlFor="check7"></label>
            </div>
            <label htmlFor="check7">tailor adds by my information</label>

          </fieldset>

          <div className="button-footer">
            <button type="button">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
