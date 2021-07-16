import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';
import { CHECKBOX_STATUS } from '../../constants/commonConstants';
import { Checkbox as CheckboxAntd } from 'antd';

Checkbox.propTypes = {
  classname: PropTypes.string,
  style: PropTypes.object,
  status: PropTypes.any,
  onCheck: PropTypes.func,
};

Checkbox.defaultProps = {
  classname: '',
  style: {},
  status: CHECKBOX_STATUS.CHECKED,
  onCheck: () => {},
};

function Checkbox(props) {
  const { classname, style, status, onCheck } = props;
  return (
    <div className={'aim-lunch-checkbox'}>
      <CheckboxAntd
        checked={status}
        onChange={() => {
          onCheck && onCheck();
        }}
      />
    </div>
  );
}

export default Checkbox;
