import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('*Please type title'),
  description: Yup.string().required('*Please type description'),
  startdate: Yup.string().required('*Please select valid date'),
  deadline: Yup.string().required('*Please select valid date'),
});

export {taskSchema};
