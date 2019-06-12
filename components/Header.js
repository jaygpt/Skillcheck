
import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>Skillcode</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>All Students' Wallet</Menu.Item>

        <Menu.Item>Add yourself</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};