export const tpl = `<div class='chats-wrapper'>
    <div class='chats'>
        <div class='chats-header'>
            <button id='chats-btn-profile'>Профиль ></button>
            <input type='text' placeholder='Поиск' />
        </div>
        <div class='chats-body'>
            {{{chatsData}}}
        </div>
        <div class='chats-footer'>
          <input placeholder='+ Создать новый чат' id='chats-footer--inp'/>
          <button id='chats-footer--btn' title='Добавить новый чат'>+</button>
        </div>
    </div>
    <div class='chats-messages'>
        <div class='chats-messages--hide'>Выберите или создайте чат</div>
        <div class='chats-messages--head'>
            <div class='chats-messages--head-logo'></div>
            <div class='chats-messages--head-name'>Вадим</div>
            <div class='chats-messages--head-option'>⋮</div>
        </div>
        <div class='chats-messages--body'>
            {{{messagesData}}}
        </div>
            {{{messageTyping}}}
    </div>
</div>`;
