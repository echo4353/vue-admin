export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能小于6位'))
    } else {
      callback()
    }
  }
}
