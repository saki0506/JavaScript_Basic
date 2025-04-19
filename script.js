// 1. Bookクラスの作成
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getDetails() {
      return `${this.title} by ${this.author} (${this.year})`;
    }
  }
  
  // 2. Libraryクラスの作成
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(title) {
      this.books = this.books.filter(book => book.title !== title);

    }

    //book・・・・・・・this.books という本のリストから順番に取り出される「１冊ずつの本オブジェクト」です。
    //book.title・・・・・その本オブジェクトがもっている「タイトル」を取り出しています。　
    // 例："1984" や "To Kill a Mockingbird"。

    //比較演算子 !==   左の「今見ている本のタイトル」と右の「消したいタイトル」が 同じではないか？ をチェックします。
    //同じ ⇒ false（消したい本なので残さない）     違う ⇒ true（消したくない本なので残す
　　//つまり、左側 (book.title) が「チェック対象の本オブジェクトのタイトル」
   //右側 (title) が「消したいタイトル（removeBook の引数）」というふうに覚えると区別しやすい

    listBooks() {
      this.books.forEach(book => {
        console.log(book.getDetails());
      });
    }
  }
  
  // 使用例
  const library = new Library();
  const book1 = new Book("1984", "George Orwell", 1949);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  
  library.addBook(book1);
  library.addBook(book2);
  
  console.log("Library Collection:");
  library.listBooks();
  
  library.removeBook("1984");
  
  console.log("Updated Library Collection:");
  library.listBooks();