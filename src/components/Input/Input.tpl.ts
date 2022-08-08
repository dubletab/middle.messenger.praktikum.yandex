export const tpl = `<div class='form-item'>
    <label for={{id}}>{{name}}</label>
    <input type={{type}} id={{id}}       
    {{#if required}}
        data-required="{{required}}"
    {{/if}}/>
    <span class='form-item--error'></span>
</div>`;
