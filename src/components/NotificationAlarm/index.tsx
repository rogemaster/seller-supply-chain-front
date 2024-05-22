import React, {useCallback, useState} from 'react';
import loadable from "@loadable/component";

const Alarm = loadable(() => import('@src/common/icon/Alarm'));
const NotificationList = loadable(() => import('@src/components/NotificationAlarm/components/NotificationList'))

const NotificationAlarm = () => {
  const [notice, setNotice] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenNotification = useCallback(() => {
    if (notice) {
      setNotice(false);
    }
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-gray-100 bg-gray-200 hover:text-blue-700" onClick={onOpenNotification}>
        <span className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-600 ${notice ? 'inline' : 'hidden'}`}>
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
        </span>
        <Alarm />
      </div>
      <NotificationList isOpen={isOpen} />
    </div>
  );
};

export default NotificationAlarm;
