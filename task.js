// 1. Данные пользователей
const users = [
  { id: 1, name: 'John', age: 25, isAdmin: false },
  { id: 2, name: 'Alice', age: 30, isAdmin: true },
  { id: 3, name: 'Bob', age: 'twenty' },
]

// 2. Функция для получения пользователя по ID
function getUserById(id) {
  return users.find((user) => user.id === id)
}

// 3. Данные заказов
const orders = [
  { id: 1, userId: 1, product: 'Laptop', price: 1000 },
  { id: 2, userId: 2, product: 'Phone', price: '500' },
  { id: 3, userId: 3, product: 'Tablet' },
]

// 4. Функция для получения заказов пользователя
function getUserOrders(userId) {
  return orders.filter((order) => order.userId === userId)
}

// 5. Функция для подсчета общей суммы заказов пользователя
function getTotalUserOrderPrice(userId) {
  const userOrders = getUserOrders(userId)
  return userOrders.reduce((total, order) => total + order.price, 0)
}

console.log(getUserById(2).name)
console.log(getUserById(5).name)

const total = getTotalUserOrderPrice(1)
console.log(`Total: $${total.toFixed(2)}`)