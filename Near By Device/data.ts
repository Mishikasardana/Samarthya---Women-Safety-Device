import { ChatData, ActionButtonData } from './types';

export const chatGroups: ChatData[] = [
  {
    icon: '/icons/office.svg',
    title: 'at Office 💼',
    onlineCount: 56,
    totalCount: 3429
  },
  {
    icon: '/icons/school.svg',
    title: 'School Girls 🏫',
    onlineCount: 38,
    totalCount: 1856
  }
];

export const actionButtons: ActionButtonData[] = [
  {
    icon: '/icons/action1.svg',
    bgColor: 'bg-rose-400',
    ariaLabel: 'Primary action'
  },
  {
    icon: '/icons/action2.svg',
    bgColor: 'bg-rose-400',
    ariaLabel: 'Secondary action'
  }
];
