        <?php
        if (isset($_REQUEST['page'])) {
            if (
                $_REQUEST['page'] == 'home' ||
                $_REQUEST['page'] == 'about' ||
                $_REQUEST['page'] == 'undiksha' ||
                $_REQUEST['page'] == 'bali' ||
                $_REQUEST['page'] == 'committee' ||
                $_REQUEST['page'] == 'schedule' ||
                $_REQUEST['page'] == 'speakers' ||
                $_REQUEST['page'] == 'venue' ||
                $_REQUEST['page'] == 'gallery' ||
                $_REQUEST['page'] == 'contact'
            ) {
                $class = "";
            } else {
                $class = "error";
            }
        } else {
            $class = "";
        }
        ?>
        <header class="header-area <?= $class ?>">
            <div class="container">
                <div class="row">
                    <div class="col-4 col-md-3">
                        <div class="logo-wrapper">
                            <h2 class="nav-brand"><a href="index"><img class="top-logo" src="assets/img/logo.png" alt=""></a></h2>
                        </div>
                    </div>
                    <div class="col-8 col-md-9">
                        <div class="event-navber">
                            <nav class="main-nav" role="navigation">

                                <input id="main-menu-state" type="checkbox" />
                                <label class="main-menu-btn" for="main-menu-state">
                                    <span class="main-menu-btn-icon"></span>
                                </label>

                                <ul id="main-menu" class="sm sm-mint">
                                    <li><a href="index?page=home">Home</a></li>
                                    <li><a href="#">About</a>
                                        <ul>
                                            <li><a href="index?page=about">About ICIRAD 2021</a></li>
                                            <li><a href="index?page=undiksha">About Undiksha</a></li>
                                            <li><a href="index?page=bali">About Bali</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Event</a>
                                        <ul>
                                            <li><a href="index?page=committee">Committee</a></li>
                                            <li><a href="index?page=gallery">Gallery Event</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="index?page=home#schedule">Schedule & Fee</a></li>
                                    <li><a href="index?page=home#cp">Contact Us</a></li>
                                </ul>
                            </nav>
                            <div class="header-ticket">
                                <a class="btn-1" href="index?page=about">Call For Paper</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>