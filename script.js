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

