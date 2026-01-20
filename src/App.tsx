
function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      
      <aside className="w-64 bg-indigo-900 text-white p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">GP Enterprises</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block py-2 px-4 rounded bg-indigo-800 text-white font-semibold">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-800 transition">Employees</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-800 transition">Sales</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-800 transition">Reports</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-800 transition">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800">Overview</h2>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin User</span>
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>


        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>

            <p className="text-3xl font-bold text-gray-800 mt-2">$45,230</p>
            <p className="text-green-500 text-sm mt-1">+12% from last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm font-medium">New Orders</h3>

            <p className="text-3xl font-bold text-gray-800 mt-2">128</p>
            <p className="text-green-500 text-sm mt-1">+5% from last week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm font-medium">Pending Issues</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
            <p className="text-red-500 text-sm mt-1">-2 from yesterday</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm font-medium">Total Employees</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">48</p>
            <p className="text-gray-400 text-sm mt-1">GP Enterprises Team</p>
          </div>
        </section>

        {/* Recent Activity Table */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-800">Recent Transactions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 font-medium text-gray-500 text-sm uppercase">ID</th>
                  <th className="py-4 px-6 font-medium text-gray-500 text-sm uppercase">Customer</th>
                  <th className="py-4 px-6 font-medium text-gray-500 text-sm uppercase">Date</th>
                  <th className="py-4 px-6 font-medium text-gray-500 text-sm uppercase">Amount</th>
                  <th className="py-4 px-6 font-medium text-gray-500 text-sm uppercase">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-gray-800">#TRX-1001</td>
                  <td className="py-4 px-6 text-gray-800 font-medium">John Doe</td>
                  <td className="py-4 px-6 text-gray-600">Jan 18, 2026</td>
                  <td className="py-4 px-6 text-gray-800 font-bold">$1,200.00</td>
                  <td className="py-4 px-6"><span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-semibold">Completed</span></td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-gray-800">#TRX-1002</td>
                  <td className="py-4 px-6 text-gray-800 font-medium">Sarah Smith</td>

                  <td className="py-4 px-6 text-gray-600">Jan 18, 2026</td>
                  <td className="py-4 px-6 text-gray-800 font-bold">$850.00</td>
                  <td className="py-4 px-6"><span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-xs font-semibold">Pending</span></td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-gray-800">#TRX-1003</td>
                  <td className="py-4 px-6 text-gray-800 font-medium">Michael Brown</td>
                  <td className="py-4 px-6 text-gray-600">Jan 17, 2026</td>
                  <td className="py-4 px-6 text-gray-800 font-bold">$2,300.00</td>
                  <td className="py-4 px-6"><span className="bg-red-100 text-red-700 py-1 px-3 rounded-full text-xs font-semibold">Cancelled</span></td>
                </tr>


                <tr className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 text-gray-800">#TRX-1004</td>
                  <td className="py-4 px-6 text-gray-800 font-medium">Emma Wilson</td>
                  <td className="py-4 px-6 text-gray-600">Jan 16, 2026</td>
                  <td className="py-4 px-6 text-gray-800 font-bold">$540.00</td>
                  <td className="py-4 px-6"><span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-semibold">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

         </section>
        </main>
    </div>
  )
}

export default App
