import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ErrorPageBlock from '../../components/ErrorPageBlock/ErrorPageBlock';

const Error500Page = new WrapperCenterPage('div', {
    children: new ErrorPageBlock('div', {
        errorNumber: 500,
        errorMessage: 'Мы уже фиксим',
    }),
});

export default Error500Page;
