<?php
// работа с данным скриптом показана в видео на сайте http://rek9.ru/otpravka-zayavok-v-google-forms/
// формируем запись в таблицу google (изменить)
$url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdsE2FS-gBbV8r6opsmjbxZytDYsDLOVM3puHbzul8NCAgf0w/formResponse";
// сохраняем url, с которого была отправлена форма в переменную utm
// $utm = $_SERVER["HTTP_REFERER"];
$info = $_POST['info'];
$utm = 'utm_source - ' . $_POST['utm_source'].'; utm_medium - ' . $_POST['utm_medium'].'; utm_campaign - ' . $_POST['utm_campaign'].'; utm_term - ' . $_POST['utm_term'].'; utm_content - ' . $_POST['utm_content'];
// ссылка для переадресации (изменить)
$link = "https://club.hollyclub.com.ua/";
// массив данных (изменить entry, draft и fbzx)
$post_data = array (
 "entry.2084667565" => $_POST['name'],
 "entry.1826936220" => $_POST['phone'],
 "entry.1040580317" => $_POST['age'],
 "entry.1652879532" => $info,
 "entry.1173049078" => $utm,
 "draftResponse" => "[null,null,&quot;-3134710017073757509&quot;]",
 "pageHistory" => "0",
 "fbzx" => "-3134710017073757509"
);

// Далее не трогать
// с помощью CURL заносим данные в таблицу google
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// указываем, что у нас POST запрос
curl_setopt($ch, CURLOPT_POST, 1);
// добавляем переменные
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//заполняем таблицу google
$output = curl_exec($ch);
curl_close($ch);

//перенаправляем браузер пользователя на скачивание оффера по нашей ссылке
// header('Location: '.$link);
?>