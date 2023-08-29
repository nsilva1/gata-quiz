import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ToastNotification = () => {
  const { toastOpen, toastContent, setToastOpen, toastVariant } = useContext(AppContext);

  if (!toastOpen) {
    return null;
  }

  return (
    <div
      className='toast toast-top toast-end cursor-pointer z-10'
      onClick={() => setToastOpen(false)}
    >
      <div className={`alert ${toastVariant}`}>
        <span>{toastContent}</span>
      </div>
    </div>
  );
};

export default ToastNotification;