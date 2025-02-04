import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: OrderItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {

    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">

                {
                    order.map((item) => (
                        <div key={item.id} className="flex justify-between text-lg border-t border-gray-200 py-5 last-of-type:b">
                            <div>
                                <p>{item.name} - {formatCurrency(item.price)}</p>

                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                                </p>

                            </div>
                            <button className="bg-red-600 h8 w-8 rounded-full text-white font-black"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
