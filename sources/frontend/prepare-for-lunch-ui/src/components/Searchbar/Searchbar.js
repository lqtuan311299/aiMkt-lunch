import { Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import IconSearch from '../Icon/IconSearch';
import './Searchbar.scss';

Searchbar.propTypes = {
  classname: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.any,
  onSearch: PropTypes.func,
  placehoder: PropTypes.string,
};

Searchbar.defaultProps = {
  classname: '',
  style: {},
  value: 'button',
  onSearch: () => {},
  placehoder: '',
};

function Searchbar(props) {
  const { classname, style, value, onSearch, placehoder } = props;
  return (
    <div className='aim-lunch-searchbar'>
      <Input
        placeholder={placehoder}
        onChange={onSearch}
        prefix={<IconSearch />}
        value={value}
      />
    </div>
  );
}

export default Searchbar;
