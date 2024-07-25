import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReactStars({ totalStars = 5, count = 1}) {
  const [selectedStars, setSelectedStars] = useState(count);
  console.log(selectedStars);
  const Star = ({selected = false, onSelect = f => f}) => (<FaStar color={selected ? 'red' : 'gray'} onClick={() => onSelect(selected ? 0 : selectedStars + 1)}/>)

  return [...Array(totalStars)].map((_, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>);
}