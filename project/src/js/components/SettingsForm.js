import React from 'react/addons';
import { Link } from 'react-router';
let {LinkedStateMixin} = React.addons

class SettingsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Jessica Tuan",
      email: "jessica@mail.com",
      password: "password1",
      notifications: {
        emailWhenPostIsFavourited: true,
        emailWhenPostIsMentioned: true,
      }
    };
  }

  // TODO: We could dynamically generate all these helpers
  setName(event) {
    this.setState({ name: event.target.value });
  }
  setEmail(event) {
    this.setState({ email: event.target.value });
  }
  setPassword(event) {
    this.setState({ password: event.target.value });
  }
  setEmailWhenPostIsFavourited(event) {
    this.setState({ emailWhenPostIsFavourited: event.target.checked });
  }
  setEmailWhenPostIsMentioned(event) {
    this.setState({ emailWhenPostIsMentioned: event.target.checked });
  }

  render() {
    return (
      <form className="settings__form">
        <h1 className="settings__form__title">Settings</h1>

        <fieldset>
          <legend>Account</legend>
          <div className="settings__avatar">
            <img src="/img/avatars/jessica.jpg" width="85" height="85" />
            <button type="button" className="secondary settings__avatar__btn-change">change</button>
          </div>
          <div className="settings__account">
            <div className="settings__account__name">
              <input type="text" placeholder="Your Name" value={this.state.name} onChange={this.setName.bind(this)} />
            </div>
            <div className="settings__account__email">
              <input type="email" placeholder="Your Email" value={this.state.email} onChange={this.setEmail.bind(this)} />
            </div>
            <div className="settings__account__password">
              <input type="password" placeholder="Password" value={this.state.password} onChange={this.setPassword.bind(this)} />
              <a href="#" className="settings__account__password__change">change</a>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Notifications</legend>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="emailWhenPostIsFavourited"
                      checked={this.state.notifications.emailWhenPostIsFavourited}
                      onChange={this.setEmailWhenPostIsFavourited.bind(this)} />
              <label htmlFor="emailWhenPostIsFavourited"></label>
            </div>
            <label htmlFor="emailWhenPostIsFavourited">email me when my posts are marked as favorites</label>
          </div>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="check2"
                      checked={this.state.notifications.emailWhenPostIsMentioned}
                      onChange={this.setEmailWhenPostIsMentioned.bind(this)} />
              <label htmlFor="check2"></label>
            </div>
            <label htmlFor="check2">email me when I'm mentioned</label>
          </div>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="check3" />
              <label htmlFor="check3"></label>
            </div>
            <label htmlFor="check3">email me when I get a reply</label>
          </div>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="check4" />
              <label htmlFor="check4"></label>
            </div>
            <label htmlFor="check4">email me when someone follows me</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Privacy</legend>
          <div className="radio-group">
            <div>
              <input type="radio" name="tagging" id="radio1" defaultChecked />
              <label htmlFor="radio1">allow anyone to tag me</label>
            </div>
            <div>
              <input type="radio" name="tagging" id="radio2" />
              <label htmlFor="radio2">only allow people I follow to tag me</label>
            </div>
            <div>
              <input type="radio" name="tagging" id="radio3" />
              <label htmlFor="radio3">don't allow anyone to tag me</label>
            </div>
          </div>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="check5" />
              <label htmlFor="check5"></label>
            </div>
            <label htmlFor="check5">add a location to my posts</label>
          </div>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="check6" />
              <label htmlFor="check6"></label>
            </div>
            <label htmlFor="check6">let others find me by email address</label>
          </div>

          <div className="checkbox">
            <div className="toggle-switch">
              <input type="checkbox" id="check7" />
              <label htmlFor="check7"></label>
            </div>
            <label htmlFor="check7">tailor adds by my information</label>
          </div>

        </fieldset>

        <div className="button-footer">
          <button type="button">Save Changes</button>
        </div>
      </form>
    )
  }

}

SettingsForm.propTypes = { };
SettingsForm.defaultProps = { };

export default SettingsForm;
