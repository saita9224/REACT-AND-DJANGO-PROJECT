import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import { getstoc, deletestoc } from '../../actions/stoc';

export class Stoc extends Component {
  static PropTypes = {
    stoc: PropTypes.array.isRequired
  };

  componentDidMount(){
    this.props.getstoc();
  }




  render() {
    return (
      <Fragment>
        <h2>Stoc ist</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>ITEM NAME</th>
              <th>AMOUNT</th>
              <th>PRICE</th>
              <th/>
              
            </tr>
          </thead>
          <tbody>
            { this.props.stoc.map(stoc => (
            <tr key={stoc.id}>
              <td>{stoc.id}</td>
              <td>{stoc.item_name}</td>
              <td>{stoc.amount}</td>
              <td>{stoc.price}</td>
              <td>
                <button onClick={this.props.deletestoc.bind(this, stoc.id
                )} 
                className='btn btn-danger btn-sm'>
                  Use
                </button>
              </td>
        
            </tr>
          ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  stoc: state.stoc.stoc
})

export default connect(mapStateToProps, {getstoc, deletestoc})(Stoc);
