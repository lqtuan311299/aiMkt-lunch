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

const DATA = [
  {
    orderId: 1,
    orderName: 'Ngày 15/07/2021',
    message: 'Các chị em ra giữ chỗ...',
    createdDate: '1626358010948',
    works: [
      {
        workName: '50% đũa',
        assignTo: 'lqtuan',
      },
      {
        workName: '50% đũa',
        assignTo: 'bvminh',
      },
    ],
  },
  {
    orderId: 2,
    orderName: 'Ngày 16/07/2021',
    message: 'Các chị em ra giữ chỗ...',
    createdDate: '1626368400000',
    works: [
      {
        workName: '50% đũa',
        assignTo: 'lqtuan',
      },
      {
        workName: '50% đũa',
        assignTo: 'bvminh',
      },
    ],
  },
];

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
        {DATA?.reverse().map((item) => (
          <>
            <span className='aim-lunch-font-label'>{item.orderName}</span>
            <div className='aim-lunch-overview-page__body-list-overview'>
              {item?.works?.map((work, index) => (
                <OverviewInstance
                  username={work?.assignTo}
                  percent={work?.workName?.split(' ')?.[0]}
                  food={
                    work?.workName?.split(' ')?.[1] ||
                    work?.workName?.split(' ')?.[0]
                  }
                />
              ))}
            </div>
          </>
        ))}
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
