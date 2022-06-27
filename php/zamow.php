<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Włoska Kuchnia - Zamów teraz!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/zamow.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bree+Serif&family=Dancing+Script&display=swap"
        rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-expand-lg nav-backcolor">
        <div class="container-fluid">
            <span class="navbar-brand txt-name h2">Włoska Kuchnia</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link txt-nav" href="../html/home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link txt-nav" href="../html/home.html#nowosc">Nowość</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link txt-nav" href="../html/menu.html">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link txt-nav" href="../html/reviews.html">Opinie</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div id="container">
        <p class="txt-basic-zamow">ZAMÓW TERAZ!</p>
        <form action="zamow.php" method="post">
        <input type="text" placeholder="Imię i Nazwisko *" id="inp1" onchange="changeImie()" name="imieINazwisko">
    <?php
        if(isset($_POST['imieINazwisko'])) {
            $nameandsur = $_POST['imieINazwisko'];
            if(empty($nameandsur)) {
                echo '<p id="p1" class="txt-error">Imię i Nazwisko nie może być krótsze niż 5 znaków.</p>';
            }
        }
    ?>
        <input type="email" placeholder="Email *" id="inp3" onchange="changeEmail(value)" name="email">
    <?php
        if(isset($_POST['email'])) {
                $email = $_POST['email'];
            if(empty($email)) {
                echo '<p id="p3" class="txt-error">Adres e-mail musi posiadać "@" w sobie.</p>';
            }
        }
    ?>
            <input type="text" placeholder="Telefon *" id="inp4" onchange="changeTelefon(value)" name="telefon">
    <?php
        if(isset($_POST['telefon'])) {
                $telefon = $_POST['telefon'];
            if(empty($telefon)) {
                echo '<p id="p4" class="txt-error">Numer telefonu musi mieć cyfry i tylko cyfry.</p>';
            }
        }
    ?>
            <input type="text" placeholder="Adres *" id="inp2" onchange="changeAdres(), getAdres()" name="adres">
    <?php
        if(isset($_POST['adres'])) {
                $adres = $_POST['adres'];
            if(empty($adres)) {
                echo '<p id="p2" class="txt-error">Adres musi zawierac min. 3 znaki i 1 cyfre.</p>';
            }
        }
    ?>
            <input type="text" placeholder="Wiadomość do sprzedającego" id="inp5" onchange="changeWiadomosc()" name="wds">
    <?php
        if(isset($_POST['adres'])) {
                $wds = $_POST['wds'];
            if(empty($nameandsur) || empty($email) || empty($telefon) || empty($adres)) {
                echo '<p id="p2" class="txt-error">Wypełni wszystkie pola które mają *</p>';
            } else {
                $connect = mysqli_connect('localhost', 'root', '', 'wloska');
                $wyslac = mysqli_query($connect, "INSERT INTO zamowienia(imie_i_nazwisko, email, telefon, adres, wiadomosc_dla_sprzedajacego) VALUES ('$nameandsur', '$email', '$telefon', '$adres', '$wds')");
                mysqli_close($connect);
                echo '<p class="txt-success">Zamówienie zostalo wyslane!</p>';
            }
        }
    ?>
            <br>
            <button onclick="zamow(value)">ZAMÓWIĆ</button>
        </form>
    </div>

    <footer>
        <div id="gridFooter">
            <p class="txt-footer">Kontakt:</p>
            <p class="txt-footer">Adres:</p>
            <p class="txt-footer">+48 888 88 88</p>
            <p class="txt-footer">Poznań</p>
            <p class="txt-footer">wloskakuchniapoznan@wloska.com</p>
            <p class="txt-footer">Centrum 13A</p>
        </div>
    </footer>
    <script src="../js/zamow.js"></script>
</body>

</html>