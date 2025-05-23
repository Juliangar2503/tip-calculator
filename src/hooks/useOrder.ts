import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState<number>(0)

    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            const updateOrder = order.map( orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem
            )
            setOrder(updateOrder)
         }
        else {
            const newItem: OrderItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])

        }

    }

    const removeItem = (id: MenuItem['id']) => {
        const newOrder = order.filter(item => item.id !== id)
        setOrder(newOrder)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return { order, tip, setTip, addItem, removeItem, placeOrder }


}
