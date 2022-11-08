import Block from './Block';
import { TPropsDefault } from './Interfaces';

export default function renderDOM(queryId: string, block: Block<TPropsDefault>) {
    const root = document.getElementById(queryId);
    if (root) {
        console.log('asd');
        root.innerHTML = '';
        root.appendChild(block.getContent());
        return root;
    }
}
