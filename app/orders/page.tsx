import TopNav from "../components/layout/topnav";

type OrderStatus = "Pending" | "Completed" | "Cancelled";

type Order = {
  id: string;
  customer: string;
  service: "Wigs" | "Tints" | "Washing" | "Installations" | "Maintenance" | "Delivery";
  status: OrderStatus;
  amount: number;
  date: string; // keep as display string for now
};

const orders: Order[] = [
  { id: "ORD-1023", customer: "Ayo", service: "Wigs", status: "Pending", amount: 250, date: "24 Dec 2025" },
  { id: "ORD-1024", customer: "Zara", service: "Tints", status: "Completed", amount: 80, date: "23 Dec 2025" },
  { id: "ORD-1025", customer: "Mariam", service: "Washing", status: "Pending", amount: 45, date: "22 Dec 2025" },
  { id: "ORD-1026", customer: "Kemi", service: "Delivery", status: "Cancelled", amount: 15, date: "20 Dec 2025" },
];

function StatusPill({ status }: { status: OrderStatus }) {
  return (
    <span className="border rounded-full px-3 py-1 text-xs">
      {status}
    </span>
  );
}

export default function OrdersPage() {
  const hasOrders = orders.length > 0;

  return (
    <div className="mt-6">
      <TopNav />

      <div className="mt-12 mx-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-instrument-serif">Orders</h1>
            <p className="mt-1 text-sm text-gray-600">
              Track recent orders and their status.
            </p>
          </div>

          <button
            type="button"
            className="border rounded-full px-5 py-2 text-sm hover:border-blue-400"
          >
            New Order
          </button>
        </div>

        {!hasOrders && (
          <div className="mt-10 border rounded-xl p-8 text-center">
            <p className="text-lg">No orders yet</p>
            <p className="mt-1 text-sm text-gray-600">
              Orders will appear here once created.
            </p>
          </div>
        )}

        {/* Mobile: Cards */}
        {hasOrders && (
          <div className="mt-10 space-y-4 md:hidden">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-600">
                      {order.customer} • {order.service}
                    </p>
                  </div>
                  <StatusPill status={order.status} />
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <p className="font-medium">£{order.amount}</p>
                  <p className="text-gray-600">{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Desktop: Table */}
        {hasOrders && (
          <div className="mt-10 hidden md:block border rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="border-b bg-gray-500">
                <tr className="text-left text-sm">
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b last:border-b-0 hover:bg-gray-500">
                    <td className="p-4 text-sm font-medium">{order.id}</td>
                    <td className="p-4 text-sm">{order.customer}</td>
                    <td className="p-4 text-sm">{order.service}</td>
                    <td className="p-4 text-sm">
                      <StatusPill status={order.status} />
                    </td>
                    <td className="p-4 text-sm">£{order.amount}</td>
                    <td className="p-4 text-sm text-gray-600">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
