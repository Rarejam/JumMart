import { useState } from "react";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productName || !price || !description || !phone) return;

    setProducts([
      ...products,
      { productName, price, oldPrice, image, description, phone },
    ]);

    // Clear fields
    setProductName("");
    setPrice("");
    setOldPrice("");
    setImage("");
    setDescription("");
    setPhone("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col gap-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Admin Dashboard
      </h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="bg-gray-300 p-4 rounded-md flex flex-col gap-3 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-gray-800">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="number"
          placeholder="Old Price (optional)"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="border border-gray-400 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Seller Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Add Product
        </button>
      </form>

      {/* Products List */}
      <div className="bg-white rounded-md p-4 shadow-md flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Products</h2>

        {products.length === 0 ? (
          <p className="text-gray-700">No products added yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-md p-4 flex flex-col gap-2"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.productName}
                    className="h-40 w-full object-contain rounded-md"
                  />
                )}
                <h3 className="text-gray-800 font-bold text-lg">
                  {p.productName}
                </h3>
                <div className="flex items-center gap-2">
                  {p.oldPrice && (
                    <p className="text-gray-600 line-through text-sm">
                      ${p.oldPrice}
                    </p>
                  )}
                  <p className="text-gray-800 font-bold text-lg">${p.price}</p>
                </div>
                <p className="text-gray-700 text-sm">{p.description}</p>
                <p className="text-gray-700 text-sm">Seller: {p.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
