import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'test', route: '/dashboard/test' },
            { label: 'about', route: '/dashboard/about' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/dashboard' },
            { label: 'Sign in', route: '/dashboard' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Pleyers',
          route: '/pleyers',
          children: [{ label: 'Player List', route: '/dashboard/players' }],
        },
      ],
    },
  ];
}
