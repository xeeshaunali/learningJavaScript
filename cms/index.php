<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>District Court Jamshoro Complaint Management System</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/half-slider.css" rel="stylesheet">
</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>       
                    <div class="text-left">
                    <img src="./img/logo.png" alt="logo" class="img-fluid" style="width:30%;">
                    <a class="navbar-brand" href="#" style="font-size: 16px; color: white; letter-spacing: 4px; word-spacing: 20px;float: right; margin-top: 50px;">Complaint Management System</a>
                    </div>

                    
                <!-- <div>         
                <a class="navbar-brand" href="#" style="font-size: 16px; color: white; letter-spacing: 4px; word-spacing: 20px;float: right;">Complaint Management System</a>
                </div> -->
                
                
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="./users" style="font-size: 14px; color: white;">User Login</a>
                    </li>
                    <li>
                        <a href="./users/registration.php" style="font-size: 14px; color: white;">User Registration</a>
                    </li>
                    <li>
                        <a href="./admin/" style="font-size: 14px; color: white;">admin</a>
                    </li>                   
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Half Page Image Background Carousel Header -->
   
    <header id="myCarousel" class="carousel img-fluid" style="margin-top:170px; box-shadow: 1px 1px black">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for Slides -->
        <div class="carousel-inner">
           
            <div class="item active">
                <!-- Set the second background image using inline CSS below. -->
                <div class="fill" style="background-image:url('./img/c2.png');"></div>
                <div class="carousel-caption">
                  
                </div>
            </div>
            <div class="item">
                <!-- Set the third background image using inline CSS below. -->
                <div class="fill" style="background-image:url('./img/c1.jpg');"></div>
                <div class="carousel-caption">
                
                </div>
            </div>
            
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>

    </header>
    </div>

    <!-- Page Content -->
    <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <h1>DISTRICT & SESSIONS COURT JAMSHORO</h1>
                
            </div>
        </div>

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>2022 &copy; District & Sesisons Court Jamshoro<a href="http://xeedesign.com/">  || Implemented by XEESHAUN</a> || Complaint Management System 2022</p>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Script to Activate the Carousel -->
    <script>
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
    </script>

</body>

</html>
