<?
$admin_mail = 'alexrumg@gmail.com'; // email для писем
$site_utl = 'https://p-tsm.ru'; // без последнего слеша
if(isset($_FILES['file'])){

    $filename = str_replace(' ', '_', $_FILES['file']['name']);

    /* Location */
    $location = "uploads/".$filename;
    $location2 = $site_utl."/uploads/".$filename;
    $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
    $imageFileType = strtolower($imageFileType);

    /* Valid extensions */
    $valid_extensions = array("jpg","jpeg","png","pdf","doc","docx","txt","gif");

    $response = 0;
    /* Check file extension */
    if(in_array(strtolower($imageFileType), $valid_extensions)) {
        /* Upload file */
        if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
            $response = $location;
        }
    }


}

$message = '';

parse_str($_POST['qs'], $qs);

$form_name='';
foreach ($qs as $k=>$v) {
    $message.= $k.': '.$v."\r\n";
    if ($k == 'Форма') {
        $form_name= $k.': '.$v;
    }
    if ($k == 'Email' && $v == 'iymon0217@gmail.com') {
        echo '111';
    }
}

if ($response != '0'){
    $message.= 'Файл: '.$location2."\r\n";
}


if (mail($admin_mail, 'Сообщение с сайта. '.$form_name, $message)){
    echo 'ok';
} else {
    echo 'error';
}