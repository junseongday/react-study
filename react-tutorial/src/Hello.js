import React, { Component } from 'react';
class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color: color }}>
        {isSpecial && <b>*</b>}안녕하세요, {name}
      </div>
    );
  }
}

// function Hello({ color, name, isSpecial }) {
//   // console.log(props);
//   return (
//     <div style={{ color: color }}>
//       {isSpecial && <b>*</b>}안녕하세요, {name}
//     </div>
//   );
// }
Hello.defaultProps = {
  name: '이름없음',
  color: 'black'
};
export default Hello;
