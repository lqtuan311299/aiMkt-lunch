import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import IconAddUser from '../../components/Icon/IconAddUser';
import IconLogo from '../../components/Icon/IconLogo';
import OverviewInstance from '../../components/OverviewInstance/OverviewInstance';
import Searchbar from '../../components/Searchbar/Searchbar';
import User from '../../components/User/User';
import { BTN_TYPE } from '../../constants/commonConstants';
import { ORDER_ENDPOINT } from '../../constants/endpoints';
import './OverviewPage.scss';

Overview.propTypes = {};

/**
 *
 * @param {*} props
 * @returns
 */
function Overview(props) {
  const history = useHistory();
  const [dataOrder, setDataOrder] = useState([]);

  useEffect(() => {
    getDataOrder();
  }, []);

  /**
   *
   * @author PQHUY1 (18/07/2021)
   */
  const getDataOrder = function () {
    axios
      .get(ORDER_ENDPOINT)
      .then((res) => {
        setDataOrder(res.data);
      })
      .catch((err) => {
        notification.error({
          message: 'co loi xay ra',
        });
      });
  };

  return (
    <div className='aim-lunch-overview-page'>
      <div className='aim-lunch-overview-page__header'>
        <span className='aim-lunch-title'>
          <IconLogo /> aiLunch
        </span>
        <span className='aim-lunch-page-title'>Lễ giao nhiệm vụ</span>
      </div>
      <div className='aim-lunch-overview-page__body'>
        {dataOrder?.reverse().map((item) => (
          <>
            <span className='aim-lunch-font-label'>{item.orderName}</span>
            <div className='aim-lunch-overview-page__body-list-overview'>
              {item?.works?.map((work, index) => (
                <OverviewInstance
                  username={work?.assignTo}
                  percent={work?.percent}
                  food={work?.workName}
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
