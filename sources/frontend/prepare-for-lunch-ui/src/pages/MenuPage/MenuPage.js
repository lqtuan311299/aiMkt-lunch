import { Input, notification } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Food from '../../components/Food/Food';
import IconAddUser from '../../components/Icon/IconAddUser';
import IconLogo from '../../components/Icon/IconLogo';
import Searchbar from '../../components/Searchbar/Searchbar';
import { BTN_TYPE, GENDER, USER_STATUS } from '../../constants/commonConstants';
import {
  MEMBER_ENDPOINT,
  ORDER_ENDPOINT,
  WORK_ENDPOINT,
} from '../../constants/endpoints';
import './MenuPage.scss';

MenuPage.propTypes = {};

/**
 *
 * @param {*} props
 * @returns
 */
function MenuPage(props) {
  const [workCount, setWorkCount] = useState(null);
  const [dataWork, setDataWork] = useState([]);
  const history = useHistory();
  const [originWork, setOriginWork] = useState([]);
  const [workName, setWorkName] = useState('');
  const [userCount, setUserCount] = useState(0);

  /**
   *
   */
  useEffect(() => {
    getDataWork();
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
        let _data = res.data?.filter(
          (user) =>
            user.gender == GENDER.MAN && user.status == USER_STATUS.ACTIVE
        );
        setUserCount(_data?.length);
      })
      .catch((err) => {
        notification.error({
          message: 'co loi xay ra',
        });
      });
  };

  /**
   *
   * @author PQHUY1 (18/07/2021)
   */
  const getDataWork = function () {
    axios
      .get(WORK_ENDPOINT)
      .then((res) => {
        let _arr = [];
        let _data = res.data;
        setOriginWork(res.data);
        _data.map((item) => {
          for (let index = 0; index < item?.workCount; index++) {
            _arr.push({
              ...item,
              percent: (100 / item.workCount).toFixed(0) + '%',
            });
          }
        });
        setDataWork(_arr);
      })
      .catch((err) => {
        notification.error({
          message: 'co loi xay ra',
        });
      });
  };

  /**
   *
   * @author PQHUY1 (18/07/2021)
   */
  const updateDataWork = function (dataWork) {
    axios
      .put(WORK_ENDPOINT, dataWork)
      .then((res) => {
        notification.success({
          message: 'update success',
        });
        getDataWork();
      })
      .catch((err) => {
        notification.error({
          message: 'co loi xay ra',
        });
      });
  };

  /**
   *
   */
  const onClickAddWork = function () {
    if (!workName?.trim()) return;
    let _dataWork = [...originWork];
    let _newWorkID = Math.max.apply(
      Math,
      _dataWork.map(function (item) {
        return item.workID;
      })
    );
    _dataWork.push({
      workID: _newWorkID + 1,
      workName: workName?.trim(),
      workCount: parseInt(workCount),
    });
    updateDataWork(_dataWork);
  };

  const onDelete = function (workID) {
    let _dataWork = [...originWork];
    let _workIndex = _dataWork.findIndex((work) => work.workID == workID);
    if (_workIndex == -1) return;
    _dataWork[_workIndex].workCount--;
    updateDataWork(_dataWork);
  };

  return (
    <div className='aim-lunch-menu-page'>
      <div className='aim-lunch-menu-page__header'>
        <span className='aim-lunch-title'>
          <IconLogo /> aiLunch
        </span>
        <span className='aim-lunch-page-title'>Menu</span>
      </div>
      <div className='aim-lunch-menu-page__body'>
        <div className='aim-lunch-menu-page__body-search'>
          <Searchbar
            placehoder={'Tim kiem theo ten'}
            onSearch={(e) => setWorkName(e.target.value)}
            value={workName}
          />
          <Input
            value={workCount}
            onChange={(e) => {
              setWorkCount(e.target.value);
            }}
            min={1}
            style={{ height: 48, borderRadius: 8, marginRight: 24, width: 100 }}
            type={'number'}
            placeholder={'So luong'}
          />
          <Button
            disabled={!workCount || workCount < 1}
            type={BTN_TYPE.TYPE_3}
            value={'Them mon'}
            prefix={<IconAddUser />}
            onClick={onClickAddWork}
          />
        </div>
        <div className='aim-lunch-menu-page__body-list-food'>
          {dataWork?.map((work, index) => (
            <Food
              label={work?.workName}
              percent={work?.percent}
              onDelete={() => {
                onDelete(work?.workID);
              }}
            />
          ))}
        </div>
      </div>

      <div className={'aim-lunch-menu-page__footer'}>
        <Button
          type={BTN_TYPE.TYPE_1}
          value={'Quay lai'}
          onClick={() => {
            history.push('/');
          }}
        />
        <Button
          value={'Chia viec'}
          onClick={() => {
            axios
              .post(ORDER_ENDPOINT, {
                orderName: new Date().toISOString(),
                message: 'aimkt',
              })
              .then((res) => {
                history.push('/overview');
              })
              .catch((err) => {
                notification.error({
                  message: 'co loi xay ra',
                });
              });
          }}
          disabled={userCount < dataWork?.length}
        />
      </div>
    </div>
  );
}

export default MenuPage;
