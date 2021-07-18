import { Input } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Food from '../../components/Food/Food';
import IconAddUser from '../../components/Icon/IconAddUser';
import IconLogo from '../../components/Icon/IconLogo';
import Searchbar from '../../components/Searchbar/Searchbar';
import { BTN_TYPE } from '../../constants/commonConstants';
import './MenuPage.scss';

MenuPage.propTypes = {};

/**
 *
 * @param {*} props
 * @returns
 */
function MenuPage(props) {
  const [numberOfFood, setNumberOfFood] = useState(null);
  const history = useHistory();
  /**
   *
   */
  const onSearch = function () {};

  /**
   *
   */
  const onClickAddFood = function () {};

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
          <Searchbar placehoder={'Tim kiem theo ten'} onSearch={onSearch} />
          <Input
            value={numberOfFood}
            onChange={(e) => {
              setNumberOfFood(e.target.value);
            }}
            min={1}
            style={{ height: 48, borderRadius: 8, marginRight: 24, width: 100 }}
            type={'number'}
            placeholder={'So luong'}
          />
          <Button
            disabled={!numberOfFood || numberOfFood < 1}
            type={BTN_TYPE.TYPE_3}
            value={'Them mon'}
            prefix={<IconAddUser />}
            onClick={onClickAddFood}
          />
        </div>
        <div className='aim-lunch-menu-page__body-list-food'>
          {Array.from(Array(8)).map((user, index) => (
            <Food label={'com cho'} percent={'25%'} />
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
            history.push('/overview');
          }}
        />
      </div>
    </div>
  );
}

export default MenuPage;
