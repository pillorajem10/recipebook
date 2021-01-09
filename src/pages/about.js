import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { rbook } from '../redux/combineActions';

const About = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log('[GG ABOUT]');
      dispatch(rbook.recipe.setSearchKeyword(''));
    };
  }, []);

  return (
    <div>
      about
    </div>
  )
}

export default About;
