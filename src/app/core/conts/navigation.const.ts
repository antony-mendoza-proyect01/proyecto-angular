import {Inavigation} from '../../data/interfaces/inavigation';
import {INTERNAL} from './routes.conts';


export const NAVIGATION_APP: Inavigation[] = [

  {
    id: 1,
    title: 'Menu',
    link: `/${INTERNAL.PADRE}/${INTERNAL.CRUDS}`,
    activeMenu: true,
    faIcon: 'fas fa-clipboard-list',
    menu: [
      {
        id: 11,
        title: 'Post',
        link: `/${INTERNAL.CRUD_PROYECTO}`,
        activeSubMenu: false,
      },
    ]
  },

];

