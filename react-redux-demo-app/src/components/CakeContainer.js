import React from 'react';

function CakeContainer() {
  return (
  <div>
      <h2>Number of Cakes </h2>
      <button>Buy Cake</button>
  </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

export default CakeContainer;
