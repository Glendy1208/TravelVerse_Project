// assets
import {
    FundOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    FundOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const transaksi = {
    id: 'transaksi',
    title: 'Transaksi',
    type: 'group',
    children: [
      {
        id: 'transaksi-main',
        title: 'Transaksi',
        type: 'item',
        url: '/operator/transaksi',
        icon: icons.FundOutlined
      }
    ]
  };
  
  export default transaksi;
  