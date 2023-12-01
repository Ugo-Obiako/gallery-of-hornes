import Image from 'react-bootstrap/Image'
import { useState } from 'react';
import Gallery from './Gallery';
import HornedBeast from './HornedBeast';



export default function BeastImage(props) {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("You click on the button")
  }

  return (
    <div>
    <button type="submit" onClick={handleClick}>{count}</button>
      <Image src={beasts.imageUrl} alt="some horned beast" rounded fluid></Image>
      <h2> You clicked the image {count} times</h2>
      </div>

  );
}