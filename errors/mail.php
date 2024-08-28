<?php 
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$userName = $_POST['username'];
$userPhone = $_POST['phone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Форма успешно отправлена!";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'gloacademy2222@gmail.com'; // Логин на почте
    $mail->Password   = 'h4HEwM*JZm'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('gloacademy2222@gmail.com', 'Glo Academy'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('aikatchalbaa@yandex.ru');  

   
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новая заявка';
        $mail->Body    = $userName . " оставил заявку на сайте, его телефон: " . $userPhone;

// Проверяем отравленность сообщения
// if ($mail->send()) {
//   echo "Отправлено"
// } else {
// echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
// }
// } catch (Exception $e) {
//     echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
// }
