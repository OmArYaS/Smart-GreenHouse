<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // قم بتخزين عنوان البريد الإلكتروني أو قم بإجراءات أخرى حسب الحاجة.
    
    // قم بتوجيه المستخدم إلى صفحة تأكيد، على سبيل المثال.
    header("Location: confirmation.php");
    exit();
}
?>
