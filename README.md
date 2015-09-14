# React-Rating
this is a really small and highly-extensible react-componenet made for your rating function

# Usage

```bash
var Rating = require('react-rating');
```
or

```bash
import Rating from 'react-rating';
```

# Examples

#### to check live example

```bash
npm run dev && open ./example/index.html
```

#### display-only
```jsx
<Rating rating={3.43} displayOnly={true} />
```

#### functional
```jsx
<Rating displayOnly={false} onSubmit={this.handleClick} />
```

#### custom unicode symbol
```jsx
<Rating rating={3.43} displayOnly={true} ratingSymbol={'\u2764'} />
```

#### and yes, of course you can use your favorite icons from FontAwesome

```jsx
<Rating rating={4.33} displayOnly={true} ratingSymbol={'\uf091'} />
```
