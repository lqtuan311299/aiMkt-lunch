import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { BTN_TYPE } from '../../constants/commonConstants';

Button.propTypes = {
  classname: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.any,
  suffix: PropTypes.any,
  prefix: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.any,
};

Button.defaultProps = {
  classname: '',
  style: {},
  value: 'button',
  suffix: null,
  prefix: null,
  onClick: () => {},
  type: BTN_TYPE.TYPE_2,
};

function Button(props) {
  const { classname, style, value, suffix, prefix, onClick, type } = props;
  return (
    <button
      onClick={() => onClick && onClick()}
      className={type + ' ' + classname}
      style={style}
    >
      {prefix && <div className='aim-lunch-btn__prefix'>{prefix}</div>}
      <span className='aim-lunch-font-menu-label'>{value}</span>
      {suffix && <div className='aim-lunch-btn__suffix'>{suffix}</div>}
    </button>
  );
}

export default Button;
