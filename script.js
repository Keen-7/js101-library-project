// مصفوفة ثنائية الأبعاد لتخزين الكتب (حسب متطلبات المشروع)
// الترتيب: [ID, Title, Author, Price, Quantity]
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];

// دالة لعرض الكتب في الجدول
function displayBooks(booksArray) {
    let tbody = document.getElementById('booksBody');
    tbody.innerHTML = ''; // تفريغ الجدول قبل إضافة البيانات الجديدة

    // استخدام حلقة التكرار للمرور على المصفوفة
    for (let i = 0; i < booksArray.length; i++) {
        let row = `<tr>
            <td>${booksArray[i][0]}</td>
            <td>${booksArray[i][1]}</td>
            <td>${booksArray[i][2]}</td>
            <td>${booksArray[i][3]}</td>
            <td>${booksArray[i][4]}</td>
        </tr>`;
        tbody.innerHTML += row;
    }
}

// عرض الكتب عند فتح الصفحة لأول مرة
displayBooks(books);

// دالة لإضافة كتاب جديد
function addBook() {
    let id = document.getElementById('bookId').value;
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;
    let price = document.getElementById('bookPrice').value;
    let quantity = document.getElementById('bookQuantity').value;

    // التأكد من أن المستخدم أدخل جميع البيانات
    if(id == '' || title == '' || author == '' || price == '' || quantity == '') {
        alert("الرجاء إدخال جميع معلومات الكتاب!");
        return;
    }

    // إضافة الكتاب كمصفوفة داخل المصفوفة الرئيسية
    books.push([parseInt(id), title, author, parseFloat(price), parseInt(quantity)]);
    alert("تم إضافة الكتاب بنجاح!");
    displayBooks(books); // تحديث الجدول
}

// دالة لحذف كتاب باستخدام رقم الـ ID
function deleteBook() {
    let id = document.getElementById('deleteId').value;
    
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] == id) {
            books.splice(i, 1); // حذف عنصر واحد من الموقع i
            alert("تم حذف الكتاب!");
            displayBooks(books);
            return;
        }
    }
    alert("لم يتم العثور على كتاب بهذا الرقم.");
}

// دالة لتعديل معلومات كتاب موجود (بناءً على الـ ID)
function editBook() {
    let id = document.getElementById('bookId').value;
    
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] == id) {
            // تحديث القيم إذا قام المستخدم بكتابة شيء جديد
            let title = document.getElementById('bookTitle').value;
            let author = document.getElementById('bookAuthor').value;
            let price = document.getElementById('bookPrice').value;
            let quantity = document.getElementById('bookQuantity').value;

            if(title != '') books[i][1] = title;
            if(author != '') books[i][2] = author;
            if(price != '') books[i][3] = parseFloat(price);
            if(quantity != '') books[i][4] = parseInt(quantity);

            alert("تم تعديل الكتاب بنجاح!");
            displayBooks(books);
            return;
        }
    }
    alert("لم يتم العثور على كتاب بهذا الرقم لتعديله.");
}

// دالة للبحث عن كتاب (برقم الكتاب، عنوانه، أو اسم المؤلف)
function searchBook() {
    let query = document.getElementById('searchQuery').value.toLowerCase();
    let searchResults = []; // مصفوفة لتخزين نتائج البحث

    for (let i = 0; i < books.length; i++) {
        // تحويل البيانات إلى نصوص لتسهيل البحث والمقارنة
        let currentId = books[i][0].toString();
        let currentTitle = books[i][1].toLowerCase();
        let currentAuthor = books[i][2].toLowerCase();

        // الجمل الشرطية للتحقق من التطابق
        if (currentId == query || currentTitle.includes(query) || currentAuthor.includes(query)) {
            searchResults.push(books[i]);
        }
    }

    if (searchResults.length > 0) {
        displayBooks(searchResults); // عرض نتائج البحث فقط
    } else {
        alert("لم يتم العثور على أية نتائج.");
        displayBooks(books); // إعادة عرض كل الكتب
    }
}

