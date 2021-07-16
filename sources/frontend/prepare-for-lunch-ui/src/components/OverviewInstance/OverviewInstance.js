import Avatar from 'antd/lib/avatar/avatar';
import PropTypes from 'prop-types';
import React from 'react';
import './OverviewInstance.scss';

OverviewInstance.propTypes = {
  classname: PropTypes.string,
  style: PropTypes.object,
  username: PropTypes.string,
  food: PropTypes.string,
  percent: PropTypes.func,
};

OverviewInstance.defaultProps = {
  classname: '',
  style: {},
  username: '',
  food: '',
  percent: '',
};

/**
 *
 * @param {*} props
 * @returns
 */
function OverviewInstance(props) {
  const { classname, style, username, food, percent } = props;
  return (
    <div className='aim-lunch-overview-instance'>
      <div className='aim-lunch-overview-instance__wrap-user'>
        <div className='aim-lunch-overview-instance__avatar aim-lunch-font-label '>
          <Avatar size={36} />
        </div>
        <div className='aim-lunch-overview-instance__username aim-lunch-font-label '>
          {username}
        </div>
      </div>

      <div className='aim-lunch-overview-instance__food aim-lunch-font-label '>
        {food}
      </div>
      <div className='aim-lunch-overview-instance__percent aim-lunch-font-label '>
        {percent}
      </div>
    </div>
  );
}

export default OverviewInstance;
