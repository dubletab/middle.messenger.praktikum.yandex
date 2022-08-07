import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ErrorPageBlock from '../../components/ErrorPageBlock/ErrorPageBlock';

const Error404Page = new WrapperCenterPage('div', {
    children: new ErrorPageBlock('div', {
        errorNumber: 404,
        errorMessage: 'Не туда попали',
    }),
});

export default Error404Page;
