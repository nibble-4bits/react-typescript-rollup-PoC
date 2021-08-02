import React from 'react';

interface GreetingProps {
  name?: string;
}

function Greeting(props: GreetingProps) {
  const { name } = props;

  return <div>Hello {name}!</div>;
}

export default Greeting;
