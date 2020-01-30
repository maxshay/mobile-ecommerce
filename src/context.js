import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        propertyListings: [],
        filter: {},
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts =() => {
        let tempProducts= [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products:tempProducts}
        })
    }
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product};
        })
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState (
            () => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }},
            () => {
                this.addTotals();
            }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    incerement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count -= 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price; 
            this.setState(() => {
                return {
                    cart:[...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
    }

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item =>item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(()=>{
            return {
                cart: []
            }
        }, ()=>{
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.0725;
        const tax = parseFloat(tempTax.toFixed(2));
        const total  = subTotal + tax;
        this.setState(()=>{
            return{
                cartSubtotal:subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    // filter 

    updateFilter = filter => {
        this.setState({
            filter
        })
    }



    static applyFilter(products, filter) {
        const { companyFilter, colorFilter } = filter;
        let filteredProducts = products;
        if (companyFilter && colorFilter && companyFilter.length === 0 && colorFilter.length === 0) {

            return products;
        }

        if (companyFilter && companyFilter.length > 0) {
            filteredProducts = filteredProducts.filter(item => companyFilter.includes(item.company))
        }

        if (colorFilter && colorFilter.length > 0) {
            filteredProducts = filteredProducts.filter(item => colorFilter.includes(item.color))
        }



        return filteredProducts;
    }

    render() {

    const filteredProducts = ProductProvider.applyFilter(
        this.state.products,
        this.state.filter
    )

        return (
            <ProductContext.Provider value={{
                ...this.state,
                filteredProducts: filteredProducts,
                updateFilter: this.updateFilter,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.incerement,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
            { this.props.children }
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
