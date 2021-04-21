import { request } from '../utils';

/**
 * 获取用户列表
 * @returns Promise
 */
export function fetchUserList() {
  return request({
    url: '',
    method: 'get',
    params: {},
  });
}

/**
 * 添加用户
 * @param {*} user 用户信息
 * @returns Promise
 */
export function addUser(user) {
  return request({
    url: '',
    method: 'post',
    data: { ...user },
  });
}
