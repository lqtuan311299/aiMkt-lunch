import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import IconAddUser from '../../components/Icon/IconAddUser';
import IconLogo from '../../components/Icon/IconLogo';
import OverviewInstance from '../../components/OverviewInstance/OverviewInstance';
import Searchbar from '../../components/Searchbar/Searchbar';
import User from '../../components/User/User';
import { BTN_TYPE } from '../../constants/commonConstants';
import './OverviewPage.scss';

Overview.propTypes = {};

/**
 *
 * @param {*} props
 * @returns
 */
function Overview(props) {
  const history = useHistory();

  return (
    <div className='aim-lunch-overview-page'>
      <div className='aim-lunch-overview-page__header'>
        <span className='aim-lunch-title'>
          <IconLogo /> aiLunch
        </span>
        <span className='aim-lunch-page-title'>Lễ giao nhiệm vụ</span>
      </div>
      <div className='aim-lunch-overview-page__body'>
        <div className='aim-lunch-overview-page__body-list-overview'>
          {Array.from(Array(8)).map((user, index) => (
            <OverviewInstance
              username={'pham quang huy1'}
              percent={'25%'}
              food={'com'}
            />
          ))}
        </div>
      </div>
      <div className={'aim-lunch-overview-page__footer'}>
        <Button
          type={BTN_TYPE.TYPE_1}
          value={'Quay lai'}
          onClick={() => {
            history.goBack();
          }}
        />
      </div>
    </div>
  );
}

export default Overview;
