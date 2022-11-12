import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Block from '../../utils/Block';
import { tpl } from './ErrorPageBlock.tpl';
import render from '../../utils/renderDOM';
import { TProps } from './ErrorPageBlock';

class ErrorPageBlockMock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            errorNumber: this.props.errorNumber,
            errorMessage: this.props.errorMessage,
        });
    }
}

describe('ErrorPageBlock component test', () => {
    beforeEach(() => {
        const { window } = new JSDOM(
            `<html>
         <body>
          <div id="root"></div>
         </body>
       </html>`,
            { url: 'http://localhost' },
        );
        // @ts-ignore
        global.window = window;
        global.document = window.document;
    });

    it('check display component', () => {
        const errorPage = new ErrorPageBlockMock({
            errorNumber: 500,
            errorMessage: 'MISTAKE',
        });
        render('root', errorPage);
        expect(document.querySelectorAll('.error--title').length).to.eq(1);
    });
});
