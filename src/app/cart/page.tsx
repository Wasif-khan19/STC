import { getAllCartProductsByUserid } from '@/components/utils/apicalling'
import React from 'react'

const Cart = () => {
    const data = getAllCartProductsByUserid(user.id as string);
  return (
    <div>Cart</div>
  )
}

export default Cart