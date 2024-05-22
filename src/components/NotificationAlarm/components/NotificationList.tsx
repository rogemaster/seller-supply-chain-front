import React from "react";
import {MockNotificationList} from "@src/mock/Notification";
import loadable from "@loadable/component";

interface IProps {
  isOpen: boolean;
}

const NotificationItem = loadable(() => import('@src/components/NotificationAlarm/components/NotificationItem'));

const NotificationList = ({isOpen}: IProps) => {
  return (
    <div className={`absolute -right-28 mt-2 flex w-72 flex-col rounded-sm border border-gray-100 bg-white shadow- sm:right-0 sm:w-80 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-4 py-3">
        <h5 className="text-sm font-medium text-gray-400 select-none">Notification</h5>
      </div>
      <ul className="flex h-auto flex-col overflow-y-auto">
        {MockNotificationList && MockNotificationList.map((item) => (
          <NotificationItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default NotificationList;