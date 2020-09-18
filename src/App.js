import React from 'react';

function Food({fav}) {
  return (
    <h3>I Love {fav}</h3>
  )
}

const foodILike = [
  {
    name: '김치',
    // image: ' '
  },
  {
    name: '만두',
    // image: ' '
  },
  {
    name: '피자',
    // image: ' '
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>

    </div>
  );
}

export default App;
