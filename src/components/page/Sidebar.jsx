import React from 'react';
import { map } from 'lodash';

import store from 'data/Store.js';

import SidebarLink from './SidebarLink.jsx';

const Sidebar = (props) => {
  const { location: { pathname } } = props;

  return (
    <div className="sidebar">
      { map(store.navigation, SidebarLink(pathname)) }
    </div>
  )
}

export default Sidebar;