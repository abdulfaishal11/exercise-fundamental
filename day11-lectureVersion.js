/*
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

class Product {
    constructor(nama, berat, price, stok) {
      this.name = nama;
      this.berat = berat;
      this.price = price;
      this.stok = stok;
    }
  }
  
  class Buku extends Product {
    constructor(nama, berat, price, stok, penerbit, penulis) {
      super(nama, berat, price, stok);
      this.penerbit = penerbit;
      this.penulis = penulis;
    }
  }
  
  class Pakaian extends Product {
    constructor(nama, berat, price, stok, warna, merk, ukuran, bahan) {
      super(nama, berat, price, stok);
      this.warna = warna;
      this.merk = merk;
      this.ukuran = ukuran;
      this.bahan = bahan;
    }
  }
  
  const produk1 = new Buku("Cara jago ngoding", 1, 100000, 5, "PDIP", "sugiono");
  const produk2 = new Pakaian(
    "Kaos Oblong",
    3,
    150000,
    10,
    "merah",
    "h&m",
    "L",
    "beton"
  );
  
  console.log(produk1);
  console.log(produk2);
  
  class OnlineShop {
    #products;
    #cart;
    constructor() {
      this.#products = [];
      this.#cart = [];
    }
  
    #checkProduct(nama) {
      return this.#products.find((item) => item.nama === nama);
    }
  
    showCatalog() {
      return {
        catalog: this.#products,
        totalCatalog: this.#products.length,
      };
    }
  
    showCart() {
      return {
        catalog: this.#cart,
        totalCatalog: this.#cart.length,
      };
    }
  
    tambahProduk(product) {
      const existingProduct = this.#checkProduct(product.nama);
  
      if (existingProduct) {
        return "Produk sudah ada dalam toko";
      }
  
      this.#products.push(product);
      return "produk berhasil di tambahkan";
    }
  
    tambahKeKeranjang(product, jumlah) {
      const availableProduct = this.#checkProduct(product.nama);
  
      if (!availableProduct) {
        return "product tidak tersedia di toko ini";
      }
  
      let cartItem = this.#cart.find(
        (item) => item.product.nama.toLowerCase() === product.nama.toLowerCase()
      );
  
      if (cartItem) {
        // jika produk sudah ada di keranjang, tambahkan jumlahnya
        if (availableProduct.stok >= jumlah) {
          cartItem.jumlah += jumlah;
          availableProduct.stok -= jumlah;
  
          return "product berhasil ditambahkan ke keranjang";
        } else {
          return "stok tidak mencukupi";
        }
      } else {
        // jika produk belum ada di keranjang, tambahkan produk baru
        if (availableProduct.stok >= jumlah) {
          this.#cart.push({ product: availableProduct, jumlah });
          availableProduct.stok -= jumlah;
          return "produk berhasil ditambahkan ke keranjang";
        } else {
          return "stok tidak mencukupi";
        }
      }
    }
  
    transaksi(userMoney, jarak) {
      let totalBelanja = 0;
  
      this.#cart.forEach((item) => {
        totalBelanja += item.product.price * item.jumlah;
      });
  
      const ongkir = jarak * 2000;
      const totalHarga = totalBelanja + ongkir;
  
      if (!jarak) {
        return "jarak harus disi";
      }
  
      if (!userMoney || userMoney < totalHarga) {
        return "uang gak cukup coy, mesti bayar = " + totalHarga;
      }
  
      this.#cart = [];
  
      return {
        message: "transaksi berhasil",
        totalBelanja: totalBelanja.toLocaleString("id-ID"),
        onkir: ongkir.toLocaleString("id-ID"),
        totalHarga: totalHarga.toLocaleString("id-ID"),
        kembalian: (userMoney - totalHarga).toLocaleString("id-ID"),
      };
    }
  }
  
  const shop = new OnlineShop();
  console.log(shop.tambahProduk(produk2));

  
  console.log(shop.tambahKeKeranjang(produk1, 2));
  
  console.log(shop.showCatalog());
  console.log(shop.showCart());
  
  console.log(shop.transaksi(500000, 10));
 console.log(Boolean(""));

 console.log();