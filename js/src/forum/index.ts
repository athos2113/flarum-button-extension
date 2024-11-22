import { extend } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';
import Button from 'flarum/common/components/Button';

// Register the extension
app.initializers.add('my-profile-button-extension', () => {
  // Extend the UserPage content
  extend(UserPage.prototype, 'content', function (this: UserPage, content: any) {
    if (!this.user) return; // Ensure the user exists

    // Create a virtual DOM element for the button
    const button = Button.component({
      className: 'Button Button--primary',
      onclick: () => alert(`Hello, ${this.user.username()}!`),
    }, 'Say Hello');

    // Append the button to the user profile content
    content.children.push(
      m('div', { className: 'UserProfileButton' }, button)
    );
  });
});
