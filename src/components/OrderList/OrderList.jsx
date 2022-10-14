import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders, handleSHowOrder }) {
  const orderListItems = orders.map(o =>
    < OrderListItem
      order={o}
      key={o._id}
      handleSHowOrder={handleSHowOrder}
    />

  )

  return (
    <main>
      {orderListItems}
    </main>
  )
}