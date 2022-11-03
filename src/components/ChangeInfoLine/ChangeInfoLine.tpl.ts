export const tpl = `
        <span class='change-info-line--item'>{{name}}</span>
        <input class='change-info-line--input' id={{id}} type={{type}} 
        {{#if required}}
        data-required="{{required}}"
        {{/if}}
        value={{info}} 
        >
        <span class='change-info-line--error'></span>
`;
