// buat parent class Product
//     constructor = nama, berat, price,stok

//     buat child class dari produk yaitu Buku dan Pakaian 
//     constructor = super, data unik dari buku dan pakaian 

//     buat class OnlineShop
//     constructor = products dan cart (private)
//     method : 
//         - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products return produk sudah ada dalam toko

//         - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
//           melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

//         - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir.example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi untuk uangUser tidak boleh kurang dari total pembayaran.

//         - showCatalog : menampilkan isi catalog dari toko

//         - showCart : menampilkan isi cart user

// class Product {
    
//     constructor (nama ,berat = 10, price = 10, stok=100) {
//         this.nama = ["buku","pakaian"]
//         this.berat = berat
//         this.price = price
//         this.stok = 100
        
//     }
 
// }

// class OnlineShop extends Product  {
//     #product
//     #cart
//     constructor (nama) {
//         super(nama)
//         this.#product = this.nama
//         this.#cart = []
//         console.log(this.#product);
//     }

//     tambahProduct(nama) {
//         if(this.nama.includes(nama)) {
//             return `product sudah ada di dalam toko`
//         } else if (this.nama.push(this.#cart)){
//             return `adding ${nama}`
//         } 

//     }

//     tambahKeranjang(product,jumlah) {
//         if(product >= jumlah) {
//             return `stock tidak mencukupi`
//         }
//         if(product === this.#cart ) 
//             return `cart sudah ada`
//     }

//     transaksi(uangUser, jarak) {
//         let transaksi = uangUser * jarak
//         if(transaksi < uangUser*jarak ){
//             return `pembayaran kurang`
//         }
//         if(transaksi > uangUser ) {
//             return `kembalian anda` + (uangUser - transaksi)
//         }
//     }

//     showCatalog() {
//         return this.#product
//     }

//     showCart() {
//         return this.#cart
//     }
// }


// const product = new Product()

// const onlineShop = new OnlineShop()
// console.log(onlineShop.tambahProduct("baju"));
// console.log(onlineShop.tambahProduct("baju"));
// console.log(onlineShop.tambahKeranjang("baju",15));
// console.log(onlineShop.transaksi());
// console.log(onlineShop.showCatalog(""));
// console.log(onlineShop.showCart(""));

// Cara lecture : 
class Product {
    constructor(nama, berat ,price , stock) {
        this.nama = nama;
        this.berat = berat
        this.price = price
        this.stock = stock
    }
}

class Buku extends Product{
    constructor(nama, berat ,price , stock, penerbit, penulis) {
        super(nama, berat ,price , stock)
        this.penerbit = penerbit
        this.penulis = penulis
    }

}

class Pakaian extends Product {
    constructor(nama, berat ,price , stock, warna, merek, ukuran, bahan) {
        super(nama, berat ,price , stock)
        this.warna = warna;
        this.merek = merek;
        this.ukuran = ukuran;
        this.bahan = bahan;
    }
}

const produk1 = new Buku("cara jago ngoding", 1, 100000, 10, "PDIP", "sugiono")
const produk2 = new Pakaian("kaos oblong" , 3, 150000, 10, "merah", "uniclo", "L","beton")
console.log(produk1);
console.log(produk2);

class OnlineShop {
    #product
    #cart
    constructor() {
        this.#product = [];
        this.#cart = [];
    }

    #checkProduct(nama, arr) {
        return this.#product.find((item) => item.nama === nama)
    }

    showCatalog() {
        return {
            catalog : this.#product,
            totalCatalog : this.#product.length
        }
    }

    showCatalog() {
        return {
            catalog : this.#product,
            totalCatalog : this.#product.length
        }
    }


    


    tambahProduct() {
        const existingProduct= this.#checkProduct(this.#product.nama)

        if(existingProduct) {
            return `produk sudah ada didalam toko`
        } 
        this.#product.push(this.#product)
        return `produk berhasil di tambahkan`
    }

    tambahKeranjang(product, jumlah) {
        const availableProduct = this.#checkProduct(product.nama)
        
        if(!availableProduct) {
            return `Produk tidak tersedia di toko ini `
        }

        let cartItem = this.#cart.find((item) => {
            item.product.nama
        }) 

    }

}

const shop = new OnlineShop()
console.log(shop.tambahProduct(produk1))