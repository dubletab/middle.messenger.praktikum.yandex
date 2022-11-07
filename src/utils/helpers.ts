import { ITempObj } from './Interfaces';

type Indexed<T = any> = {
    [key in string]: T;
};

type PlainObject<T = any> = {
    [k in string]: T;
};

export const queryStringify = (data: ITempObj) => {
    const keys = Object.keys(data);
    return keys.reduce(
        (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
        '?',
    );
};

const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
    // eslint-disable-next-line no-restricted-syntax
    for (const p in rhs) {
        // eslint-disable-next-line no-prototype-builtins
        if (!rhs.hasOwnProperty(p)) {
            // eslint-disable-next-line no-continue
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
};

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>(
        (acc, key) => ({
            [key]: acc,
        }),
        value as any,
    );
    return merge(object as Indexed, result);
};

export const displayFormLog = (form: HTMLFormElement, message: string, isSuccess: boolean) => {
    try {
        const logContainer = form.querySelector('.log-container');
        if (logContainer) {
            logContainer.textContent = '';
            if (isSuccess) {
                if (!logContainer.classList.contains('success')) {
                    logContainer.classList.add('success');
                }
                if (logContainer.classList.contains('error')) {
                    logContainer.classList.remove('error');
                }
            } else {
                if (logContainer.classList.contains('success')) {
                    logContainer.classList.remove('success');
                }
                if (!logContainer.classList.contains('error')) {
                    logContainer.classList.add('error');
                }
            }
            logContainer.textContent = message;
        }
    } catch (error) {
        console.error('log-container was not found');
    }
};

const isPlainObject = (value: unknown): value is PlainObject =>
    typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]';

const isArray = (value: unknown): value is [] => Array.isArray(value);

const isArrayOrObject = (value: unknown): value is [] | PlainObject => isPlainObject(value) || isArray(value);

export const isEqual = (lhs: PlainObject, rhs: PlainObject) => {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                // eslint-disable-next-line no-continue
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
};

// export const displayMessage = (event: any, name: any) => {
//     const wrapMessage = document.createElement('div');
//     wrapMessage.classList.add('message');
//     wrapMessage.classList.add(name);
//
//     const contentMessage = document.createElement('p');
//     contentMessage.textContent = event.content;
//
//     wrapMessage.appendChild(contentMessage);
//
//     const wrapInfoMessage = document.createElement('div');
//     wrapInfoMessage.classList.add('info-msg');
//
//     const time = document.createElement('span');
//     time.textContent = new Date(event.time).toLocaleTimeString();
//     time.classList.add('time');
//
//     wrapInfoMessage.appendChild(time);
//     wrapMessage.appendChild(wrapInfoMessage);
//     console.log(wrapMessage);
//     document.querySelector('.chats-messages--body')?.appendChild(wrapMessage);
// };

export const trim = (word: string, symbols?: string): string => {
    if (!symbols) {
        return word.replace(/^[\s|u'\xa0']+|[\s|u'\xa0']+$/gu, '');
    }
    const rep = new RegExp(`^[${symbols}]+|[${symbols}]+$`, 'gu');
    return word.replace(rep, '');
};

export const getAllSiblings = (element: any, include: any) => {
    const siblings = element.parentNode.children;
    if (include) return siblings;

    const out = [];
    for (let i = 0; i < siblings.length; i += 1) {
        if (siblings[i] !== element) {
            out.push(siblings[i]);
        }
    }
    return out;
};
