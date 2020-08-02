import React from "react";
import ProductForm from "./ProductForm";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="mb-3">
          <h1>WooCommerce Product Bundle JSON Generator</h1>
          <div>
            Use this form to create JSON for product imports that use
            WooCommerce Product Bundles. The idea is to have a friendly UI to
            create your bundled products and then simply copy and paste into the
            column <pre>Bundled Items (JSON-encoded)</pre> in your .csv.
          </div>
        </header>
        <main>
          <ProductForm />
        </main>
        <footer>
          <p>
            Created by <a href="https://github.com/itrogers">Ian Rogers</a> at{" "}
            <a href="https://www.mvestormedia.com">Mvestor Media</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
