import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import AppColors from '../theme/colors';

const status = {
  ONGOING: 1,
  PENGING: 2,
  COMPLATED: 3,
  CANCEL: 4,
};

const taskValues = [
  {
    status: 1,
    title: 'Ongoing',
    color: AppColors.ONGOING,
    icon: <ChartCircle size="34" color="#ffffff" />,
  },
  {
    status: 2,
    title: 'Pending',
    color: AppColors.PENDING,
    icon: <Clock size="34" color="#ffffff" />,
  },
  {
    status: 3,
    title: 'Complated',
    color: AppColors.COMPLATE,
    icon: <TickCircle size="34" color="#ffffff" />,
  },
  {
    status: 4,
    title: 'Cancel',
    color: AppColors.CANCEL,
    icon: <CloseCircle size="34" color="#ffffff" />,
  },
];

export {status, taskValues};
