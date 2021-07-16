import Avatar from 'antd/lib/avatar/avatar';
import PropTypes from 'prop-types';
import React from 'react';
import { CHECKBOX_STATUS, USER_STATUS } from '../../constants/commonConstants';
import Checkbox from '../Checkbox/Checkbox';
import IconX from '../Icon/IconX';
import './User.scss';

User.propTypes = {
  classname: PropTypes.string,
  style: PropTypes.object,
  username: PropTypes.string,
  shortname: PropTypes.string,
  onDelete: PropTypes.func,
  onChangeStatus: PropTypes.func,
  status: PropTypes.any,
};

User.defaultProps = {
  classname: '',
  style: {},
  username: '',
  shortname: '',
  onDelete: () => {},
  onChangeStatus: () => {},
  status: USER_STATUS.ACTIVE,
};

function User(props) {
  const { classname, style, username, shortname, onDelete } = props;
  return (
    <div className='aim-lunch-user'>
      <div className='aim-lunch-user__status'>
        <Checkbox
          status={CHECKBOX_STATUS.CHECKED}
          onCheck={() => onChangeStatus && onChangeStatus()}
        />
      </div>
      <div className='aim-lunch-user__info'>
        <Avatar size={48} />
        <div className='aim-lunch-user__info-text'>
          <div className='aim-lunch-user__info-text-username aim-lunch-font-label '>
            {username}
          </div>
          <div className='aim-lunch-user__info-text-shortname aim-lunch-font-body '>
            {shortname}
          </div>
        </div>
      </div>
      <div
        className='aim-lunch-user__delete'
        onClick={() => onDelete && onDelete()}
      >
        <IconX />
      </div>
    </div>
  );
}

export default User;
