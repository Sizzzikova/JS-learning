/*
Примеры корректных паролей:

1234-
4321_
qaz-xsw
_zxd
Примеры некорректных паролей:

_-a
qaz
_-3
123456789     */

let password = '23456789'

if (password.length >= 4 && password.includes('_') || password.includes('-')) {
  console.log('Пароль надежный')
} else {
  console.log('Пароль не подходит')
}
