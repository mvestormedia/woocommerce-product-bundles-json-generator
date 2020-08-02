import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import trimStart from "lodash.trimstart";
import trimEnd from "lodash.trimend";

class ProductForm extends Component {
  state = {
    products: [
      {
        "1": {
          product_id: "",
          menu_order: 0,
          meta_data: {
            quantity_min: 1,
            quantity_max: 1,
            priced_individually: "yes",
            shipped_individually: "no",
            override_title: "no",
            title: "",
            override_description: "no",
            description: "",
            optional: "no",
            hide_thumbnail: "yes",
            discount: "",
            override_variations: "no",
            override_default_variation_attributes: "no",
            single_product_visibility: "visible",
            cart_visibility: "visible",
            order_visibility: "visible",
            single_product_price_visibility: "hidden",
            cart_price_visibility: "hidden",
            order_price_visibility: "hidden",
          },
        },
      },
    ],
  };

  handleAddProduct = () => {
    const products = [...this.state.products];
    const newProduct = {
      [products.length + 1]: {
        product_id: "",
        menu_order: products.length,
        meta_data: {
          quantity_min: 1,
          quantity_max: 1,
          priced_individually: "yes",
          shipped_individually: "no",
          override_title: "no",
          title: "",
          override_description: "no",
          description: "",
          optional: "no",
          hide_thumbnail: "yes",
          discount: "",
          override_variations: "no",
          override_default_variation_attributes: "no",
          single_product_visibility: "visible",
          cart_visibility: "visible",
          order_visibility: "visible",
          single_product_price_visibility: "hidden",
          cart_price_visibility: "hidden",
          order_price_visibility: "hidden",
        },
      },
    };
    products.push(newProduct);
    this.setState({ products });
  };

  handleUpdateProduct = ({ currentTarget: input }, index) => {
    const value = input.value;
    const allProducts = [...this.state.products];
    const product = allProducts[index][index + 1];
    if (input.name === "sku") {
      product.product_id = value;
    }

    if (input.name === "qty") {
      product.meta_data.quantity_min = parseInt(value);
      product.meta_data.quantity_max = parseInt(value);
    }

    if (input.name === "discount") {
      product.meta_data.discount = parseFloat(value);
    }

    allProducts[index] = {
      [index + 1]: product,
    };

    this.setState({ products: allProducts });
  };

  renderProductInput = (productData, index) => {
    const controlId = `product-${index}`;
    const product = productData[index + 1];
    return (
      <div key={controlId} className="my-2 py-2 border-bottom">
        <Form.Group
          key={controlId + "-sku"}
          as={Row}
          controlId={controlId + "-sku"}
        >
          <Form.Label column sm="2">
            Product SKU
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={product.product_id}
              name="sku"
              type="text"
              onChange={(e) => this.handleUpdateProduct(e, index)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          key={controlId + "-qty"}
          as={Row}
          controlId={controlId + "-qty"}
        >
          <Form.Label column sm="2">
            Quantity
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={product.meta_data.quantity_min}
              name="qty"
              type="number"
              min={1}
              onChange={(e) => this.handleUpdateProduct(e, index)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          key={controlId + "-discount"}
          as={Row}
          controlId={controlId + "-discount"}
        >
          <Form.Label column sm="2">
            Discount %
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={product.meta_data.discount}
              name="discount"
              type="number"
              min={0}
              max={100}
              onChange={(e) => this.handleUpdateProduct(e, index)}
            />
          </Col>
        </Form.Group>
      </div>
    );
  };

  render() {
    const jsonCode = trimEnd(
      trimStart(JSON.stringify(this.state.products), "["),
      "]"
    );

    return (
      <Row>
        <Col md="7">
          <Form>
            {this.state.products.map((product, index) => {
              return this.renderProductInput(product, index);
            })}
            <div className="mt-4">
              <Button onClick={() => this.handleAddProduct()}>
                + Add Product
              </Button>
            </div>
          </Form>
        </Col>
        <Col md="5">
          <div
            className="bg-dark p-3"
            style={{ maxHeight: 800, overflow: "scroll" }}
          >
            <code>{jsonCode}</code>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ProductForm;
