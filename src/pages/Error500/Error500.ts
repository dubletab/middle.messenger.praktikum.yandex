import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ErrorPageBlock from '../../components/ErrorPageBlock/ErrorPageBlock';

const Error500Page = new WrapperCenterPage({
    children: new ErrorPageBlock({
        errorNumber: 500,
        errorMessage: 'Мы уже фиксим',
    }),
});

export default Error500Page;
