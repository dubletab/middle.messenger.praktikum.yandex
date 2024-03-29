import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Block from '../../utils/Block';
import { tpl } from './Avatar.tpl';
import render from '../../utils/renderDOM';
import { TProps } from './Avatar';

class AvatarMock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            url: this.props.url,
        });
    }
}

describe('Avatar component test', () => {
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
        const ava = new AvatarMock({
            url: 'testURL',
        });
        render('root', ava);
        expect(document.querySelectorAll('.avatar--img').length).to.eq(1);
    });
});
