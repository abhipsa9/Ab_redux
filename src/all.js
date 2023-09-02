import React from 'react';
import { connect } from 'react-redux';

function All({ x }) {
  return (
    <div>
      <div>Hello All</div>
      <div>
        {x.map((item) => {
          return <li>{item}</li>;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (globalstate) => {
  return { x: globalstate };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
