# Trusted Shops React

The trusted shops self-contained React component (Plug and play)

![Trusted](http://www.trustedshops.eu/cms/assets/images/support/trustbadge_path_en-UK.png)

# Installing

```
npm install trustedshops --save
```

# Usage

To use this widget first discover the `shopId` on http://www.trustedshops.com/
after install this package and use as follow:

```javascript
import React from 'react';
import TrustedShop from 'trustedshops';

function MyApp() {
  return (
    <TrustedShop shopId="someshop_id" />
  );
}

export default MyApp;

```

# License MIT

This project was made under MIT license
