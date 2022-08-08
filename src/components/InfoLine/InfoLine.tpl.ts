export const tpl = `
    {{#if info}}
        <span class='info-line--item'>{{item}}</span>
        <span class='info-line--info'>{{info}}</span>
    {{else}}
        <button
            class='info-line--btn {{classNames}}'
        >{{item}}</button>
    {{/if}}
`;
