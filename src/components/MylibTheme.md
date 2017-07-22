Using the theme component you import all proper colors and styles:

      <div>
        <MylibTheme>
          <div>
            <h1>Headline 1(H1)</h1>
            <h2>Headline 2(H2)</h2>
            <h3>Headline 3(H3)</h3>
            <h4>Headline 4(H4)</h4>
            <h5>Headline 5(H5)</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className='text--small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className='text--mark'>Lorem ipsum dolor sit amet</p>
            <ul>
              <li>List item</li>
              <li>List item</li>
            </ul>
            <ol>
              <li>Numbered list item</li>
              <li>Numbered list item</li>
              <li>Numbered list item</li>
              <li>Numbered list item</li>
            </ol>
          </div>
        </MylibTheme>
      </div>

Basic usage:
```javascript
import MylibTheme from 'mylib-react-ui';

const MyApp = () => {
  <div>Awesome app</div>
}

const StyledApp = () => {
  <MylibTheme>
    <MyApp />
  </MylibTheme>
}
```


