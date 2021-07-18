import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import IconAddUser from '../../components/Icon/IconAddUser';
import IconLogo from '../../components/Icon/IconLogo';
import Searchbar from '../../components/Searchbar/Searchbar';
import User from '../../components/User/User';
import { BTN_TYPE, GENDER, USER_STATUS } from '../../constants/commonConstants';
import './UserPage.scss';
import axios from 'axios';
import { MEMBER_ENDPOINT } from '../../constants/endpoints';
import { notification, Radio } from 'antd';

UserPage.propTypes = {};

/**
 *
 * @param {*} props
 * @returns
 */
function UserPage(props) {
  const history = useHistory();
  const [dataUser, setDataUser] = useState([]);
  const [gender, setGender] = useState(GENDER.MAN);
  const [username, setUsername] = useState('');

  useEffect(() => {
    getDataUser();
  }, []);

  /**
   *
   * @author PQHUY1 (18/07/2021)
   */
  const getDataUser = function () {
    axios
      .get(MEMBER_ENDPOINT)
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((err) => {
        notification.error({
          message: 'co loi xay ra',
        });
      });
  };

  /**
   * update data user
   * @param {*} dataUser data user moi can update
   * @author PQHUY1 (18/07/2021)
   */
  const updateDataUser = function (dataUser) {
    axios.put(MEMBER_ENDPOINT, dataUser).then((res) => {
      notification.success({
        message: 'update success',
      });
      getDataUser();
    });
  };

  /**
   *
   * @author PQHUY1 (18/07/2021)
   */
  const onSearch = function (e) {
    setUsername(e.target.value);
  };

  /**
   *
   * @author PQHUY1 (18/07/2021)
   */
  const onClickAddUser = function () {
    if (!username?.trim()) return;
    let _dataUser = [...dataUser];
    let _arrName = username?.split(' ');
    _arrName = _arrName
      ?.map((item, idx) => (idx != _arrName?.length - 1 ? item?.[0] : item))
      .join('');
    let _newUser = {
      shortName: _arrName,
      name: username,
      status: USER_STATUS.ACTIVE,
      gender: gender,
    };
    _dataUser.push(_newUser);

    updateDataUser(_dataUser);
  };

  /**
   *
   * @param {*} userIndex
   * @param {*} userStatus
   * @author PQHUY1 (18/07/2021)
   */
  const onChangeDataUser = function (userIndex, userStatus) {
    let _dataUser = [...dataUser];
    if (userStatus === 1) {
      _dataUser[userIndex].status = 0;
    } else {
      _dataUser[userIndex].status = 1;
    }

    updateDataUser(_dataUser);
  };

  /**
   *
   * @param {*} userIndex
   * @author PQHUY1 (18/07/2021)
   */
  const onDeleteUser = function (userIndex) {
    let _dataUser = [...dataUser];
    _dataUser?.splice(userIndex, 1);
    updateDataUser(_dataUser);
  };

  return (
    <div className='aim-lunch-user-page'>
      <div className='aim-lunch-user-page__header'>
        <span className='aim-lunch-title'>
          <IconLogo /> aiLunch
        </span>
        <span className='aim-lunch-page-title'>Thanh vien du an (24)</span>
      </div>
      <div className='aim-lunch-user-page__body'>
        <div className='aim-lunch-user-page__body-search'>
          <Searchbar
            placehoder={'Tim kiem theo ten'}
            onSearch={onSearch}
            value={username}
          />
          <Radio.Group
            onChange={() => {
              setGender(gender == GENDER.MAN ? GENDER.WOMAN : GENDER.MAN);
            }}
            value={gender}
          >
            <Radio value={1}>Nam</Radio>
            <Radio value={0}>Nữ</Radio>
          </Radio.Group>
          <Button
            type={BTN_TYPE.TYPE_3}
            value={'Them thanh vien'}
            prefix={<IconAddUser />}
            onClick={onClickAddUser}
          />
        </div>

        <div className='aim-lunch-user-page__body-list-user'>
          {dataUser?.map((user, index) => (
            <User
              avatar={user?.gender == GENDER.MAN ? 'NAM' : 'NỮ'}
              username={user?.name}
              shortname={user?.shortName}
              status={user?.status}
              onChangeStatus={() => onChangeDataUser(index, user?.status)}
              onDelete={() => onDeleteUser(index)}
            />
          ))}
        </div>
      </div>
      <div className={'aim-lunch-user-page__footer'}>
        <Button
          disabled={!dataUser?.length}
          value={'Tiep tuc'}
          onClick={() => {
            history.push('/menu');
          }}
        />
      </div>
    </div>
  );
}

export default UserPage;
