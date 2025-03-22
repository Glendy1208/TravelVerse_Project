// assets
import {
    PlusCircleFilled
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    PlusCircleFilled
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const wisata = {
    id: 'wisata',
    title: 'Wisata',
    type: 'group',
    children: [
      {
        id: 'wisata-wisata',
        title: 'Wisata',
        type: 'item',
        url: '/operator/wisata',
        icon: icons.PlusCircleFilled
      }
    ]
  };
  
  export default wisata;
  