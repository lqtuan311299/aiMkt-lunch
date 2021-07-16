import PropTypes from 'prop-types';
import React from 'react';
import IconX from '../Icon/IconX';
import './Food.scss';

Food.propTypes = {
  classname: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  percent: PropTypes.any,
  onDelete: PropTypes.func,
};

Food.defaultProps = {
  classname: '',
  style: {},
  label: '',
  percent: '',
  onDelete: () => {},
};

function Food(props) {
  const { classname, style, label, percent, onDelete } = props;
  return (
    <div className='aim-lunch-food'>
      <div className='aim-lunch-food__img'></div>
      <div className='aim-lunch-food__info'>
        <div className='aim-lunch-food__info-label aim-lunch-font-label '>
          {label}
        </div>
        <div className='aim-lunch-food__info-percent aim-lunch-font-body '>
          {percent}
        </div>
      </div>
      <div
        className='aim-lunch-food__delete'
        onClick={() => onDelete && onDelete()}
      >
        <IconX />
      </div>
    </div>
  );
}

export default Food;
