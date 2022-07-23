import tpl from './Error.hbs';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

import './Error.less';

export default props => WrapperCenterPage({ children: tpl(props) });
