import React from 'react';
import { INotification } from '@src/interface/NoticeInterface';

interface INotificationItem {
  item: INotification;
}

const NotificationItem = ({ item }: INotificationItem) => {
  return (
    <li>
      <div className="flex flex-col gap-2 border-t border-gray-100 px-4 py-3 hover:border-gray-200">
        <p className="text-sm">
          <span className="text-black font-semibold">{item.title}</span>
        </p>
        <p className="text-sm">{item.content}</p>
        <p className="text-xs">{item.date}</p>
      </div>
    </li>
  );
};

export default NotificationItem;
