import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

const About = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(rbook.recipe.setSearchKeyword(''));
    };
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <h1>A B O V T</h1>
    </div>
  )
}

export default About;
