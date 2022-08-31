import { ITempObj } from './Interfaces';

export const queryStringify = (data: ITempObj) => {
    const keys = Object.keys(data);
    return keys.reduce(
        (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
        '?',
    );
};
