import React, { Fragment } from 'react';
import Form from './Form';
import Stoc from './Stoc'; // Assuming you meant 'Stoc' instead of 'stoc'

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Stoc />
    </Fragment>
  );
}
