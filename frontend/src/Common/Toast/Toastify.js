import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export const notify = (message, type) => {

  const customToastId = 'xxx-yyy';

    toast(message, {
      toastId: customToastId,
      closeButton: false,
      autoClose: 2000,
      type: toast.TYPE[`${type}`]
    });
};
