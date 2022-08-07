import Block from './block';

export default function renderDOM(queryId: string, block: Block) {
    const root = document.getElementById(queryId);
    if (root) {
        root.innerHTML = '';
        root.appendChild(block.getContent());
        return root;
    }
}
