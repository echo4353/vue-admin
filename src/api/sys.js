import request from '@/utils/request'

/**
 * 登录
 */
export const login = (data) => {
  return request({
    mock: true,
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    mock: true,
    url: '/sys/profile'
  })
}
