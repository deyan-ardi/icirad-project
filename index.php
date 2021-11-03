<!DOCTYPE html>
<html>

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="title" content="International Conference on Innovative Research across Disciplines (ICIRAD)">
        <meta name="description" content="Held by The Research and Community Service Institute of Undiksha in partnership with Don Mariano Marcos Memorial State University.">
        <meta name="keywords" content="ICIRAD, 2021, ICIRAD 2021, UNDIKSHA, LPPM, International Conference, Conference, Research">
        <meta name="robots" content="index, follow">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="language" content="English">
        <meta name="revisit-after" content="1 days">
        <meta name="author" content="LPPM Undiksha">
        <meta name="google-site-verification" content="sFdrWqSTlhuv0X9nlJrqIYpX9URcygEZRcy0_Ajnay4" />
        <title>ICIRAD 2021 | Universitas Pendidikan Ganesha</title>

        <?php include 'include/master/_header.php' ?>
</head>

<body>

        <div id="preloader-1"></div>

        <div class="scrollup"><i class="fas fa-long-arrow-alt-up scrollup-icon"></i></div>

        <?php include 'include/master/_navbar.php' ?>

        <?php
        if (isset($_REQUEST['page'])) {
                switch ($_REQUEST['page']) {
                        case 'home':
                                include 'include/page/home.php';
                                break;
                        case 'about':
                                include 'include/page/about/about.php';
                                break;
                        case 'undiksha':
                                include 'include/page/about/undiksha.php';
                                break;
                        case 'bali':
                                include 'include/page/about/bali.php';
                                break;
                        case 'committee':
                                include 'include/page/committee.php';
                                break;
                        case 'schedule':
                                include 'include/page/other/schedule.php';
                                break;
                        case 'speakers':
                                include 'include/page/other/speakers.php';
                                break;
                        case 'venue':
                                include 'include/page/other/venue.php';
                                break;
                        case 'contact':
                                include 'include/page/contact.php';
                                break;
                        default:
                                include 'include/page/404.php';
                                break;
                }
        } else {
                include 'include/page/home.php';
        }
        ?>


        <?php include 'include/master/_footerArea.php' ?>

        <?php include 'include/master/_footer.php' ?>
</body>


</html>