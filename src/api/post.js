/* eslint-disable no-template-curly-in-string */
import intance from "./instance";

export const getAll = () => {
    const url = "/posts";
    return intance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return intance.get(url, id);
};
export const add = (post) => {
    const url = `/posts`;
    return intance.post(url, post);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return intance.delete(url);
};
export const update = (post) => {
    const url = `/posts/${post.id}`;
    return intance.put(url, post);
};
