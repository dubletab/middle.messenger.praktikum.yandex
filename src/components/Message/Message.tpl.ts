export const tpl = `
{{#each messages}}
    {{#if (isAuthor user_id)}}
    <div class="message message-from-me">
    {{else}}
     <div class="message">
    {{/if}}
    <p>{{content}}<time>{{getTime time}}</time></p>
</div>

{{/each}}
`;
