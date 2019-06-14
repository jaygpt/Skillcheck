
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      
      <Link route="/">
        <a className="item">Skillcode</a>
      </Link>

      <Menu.Menu position="right">
      <Link route="/">
          <a className="item">All Students' Wallet</a>
        </Link>
        <Link route="/test/test">
          <a className="item">Test</a>
        </Link>
        <Link route="/test/newtest">
          <a className="item">New Test</a>
        </Link>
        <Link route="/campaign/new">
          <a className="item">Add yourself</a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};