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
            <div class="settings--avatar">

            </div>
            <div class="settings--login">
              Name
              Email
              Password
              Change
            </div>
          </fieldset>

          <fieldset>
            <legend>Notifications</legend>
            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> email me when my posts are marked as favorites
              </label>
            </p>
            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> email me when I'm mentioned
              </label>
            </p>
            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> email me when I get a reply
              </label>
            </p>
            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> email me when someone follows me
              </label>
            </p>
          </fieldset>

          <fieldset>
            <legend>Privacy</legend>
            <div class="radio-group">
              <p>
                <label class="radio">
                  <input type="radio" name="tagging" /> allow anyone to tag me
                </label>
              </p>
              <p>
                <label class="radio">
                  <input type="radio" name="tagging" /> only allow people I follow to tag me
                </label>
              </p>
              <p>
                <label class="radio">
                  <input type="radio" name="tagging" /> don't allow anyone to tag me
                </label>
              </p>
            </div>

            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> add a location to my posts
              </label>
            </p>
            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> let others find me by email address
              </label>
            </p>
            <p>
              <label class="toggle-switch">
                <input type="checkbox" /> tailor adds by my information
              </label>
            </p>
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
