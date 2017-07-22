import React from 'react';
import ReactDOM from 'react-dom';
import MyLibTheme, {
    Button,
    AppBar,
    Icon,
    FooterBar,
    MainTitle,
    Toggle
} from '../src/';

const TestApp = ({...props}) => {
  // Integration test.
  //
  // Declare here all components to be tested. It ensures that they are beeing
  // exported properly and beeing rendered without runtime errors.
  //
  // Those tests doesn't make the unit tests useless!!
  //
  return (
    <MyLibTheme>
      <Button>Foo</Button>
      <div>
        <Icon name="box"/>
      </div>
    </MyLibTheme>
  )
}

it('renders all components without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestApp />, div);
});
