import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import IconAddUser from '../../components/Icon/IconAddUser';
import IconLogo from '../../components/Icon/IconLogo';
import Searchbar from '../../components/Searchbar/Searchbar';
import User from '../../components/User/User';
import { BTN_TYPE } from '../../constants/commonConstants';
import './UserPage.scss';

UserPage.propTypes = {};

/**
 *
 * @param {*} props
 * @returns
 */
function UserPage(props) {
  const history = useHistory();

  /**
   *
   */
  const onSearch = function () {};

  /**
   *
   */
  const onClickAddUser = function () {};

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
          <Searchbar placehoder={'Tim kiem theo ten'} onSearch={onSearch} />
          <Button
            type={BTN_TYPE.TYPE_3}
            value={'Them thanh vien'}
            prefix={<IconAddUser />}
            onClick={onClickAddUser}
          />
        </div>

        <div className='aim-lunch-user-page__body-list-user'>
          {Array.from(Array(8)).map((user, index) => (
            <User username={'pham quang huy1'} shortname={'pqhuy'} />
          ))}
        </div>
      </div>
      <div className={'aim-lunch-user-page__footer'}>
        <Button
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
