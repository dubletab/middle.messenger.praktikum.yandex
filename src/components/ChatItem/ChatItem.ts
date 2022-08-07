import { tpl } from './ChatItem.temp';
import * as Handlebars from 'handlebars';

import './ChatItem.less';

export const ChatItem: any = (props: any) => Handlebars.compile(tpl)(props);
