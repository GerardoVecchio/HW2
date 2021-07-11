<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel = "stylesheet"  href ="{{url('/css/style.css')}}">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto+Mono&display=swap" rel="stylesheet">
            <link rel="shortcut icon" href="https://images.vexels.com/media/users/3/129334/isolated/preview/5e167ebc8f4491a5b2b123c57218c034-basketball-player-circle-icon-by-vexels.png">
            <script src="{{url('/pagina-scambi.js')}}" defer="true"></script>
            <script src="{{url('/OtherFunctions.js')}}" defer="true"></script>
            <meta id='tkn' name='_token' content='{{$csrf_token}}'>
            <title>NBA_simulator</title> 
        </head>

        <body>
        <header>
                <h1>
                    <strong>NBA Simulator</strong><br/>
                    <a class= "button" href="{{url('scelte')}}">START</a></h1>
                    <nav>
                        <div class="menu" name="menu_sx">
                            <a class="button" href="{{url('home')}}">Homepage</a>   
                            <a class="button" href="{{url('classifiche')}}">Classifiche</a>
                        </div>
                        <div class="logo">
                            <img src="https://i.imgur.com/rAQpEzo.png" >
                        </div>
                        <div class="menu" name="menu_dx">
                            <a class="button" href="{{url('news')}}">News</a>  
                            @if($allenatore !='')
                                    <a class="button" href="{{url('logout')}}">Logout</a>
                                    <a class="button" href="{{url('scambi')}}">Scambi</a>
                                    <a class="button" href="{{url('partite')}}">Partite</a>
                            @else
                                    <a class="button" href="{{url('login')}}">Login</a>
                                @endif
                            <a class="button" href="{{url('profile')}}">Profilo</a>

                        </div>

                        <!-- nav Mobile-->
                        <div id="NavM">
                            <div id="NewSideNav" class="sidenav">
                                <a href="javascript:void(0)" class="closeNav" onclick="closeNav()">&times;</a>
                                <a href="{{url('home')}}">Homepage</a>
                                <a href="{{url('classifiche')}}">Classifiche</a>
                                <a href="{{url('news')}}">News</a>
                                @if($allenatore !='')
                                    <a class="button" href="{{url('logout')}}">Logout</a>
                                    <a class="button" href="{{url('scambi')}}">Scambi</a>
                                    <a class="button" href="{{url('partite')}}">Partite</a>
                                @else
                                    <a class="button" href="{{url('login')}}">Login</a>
                                @endif
                                <a  href="{{url('profile')}}">Profilo</a>

                                <a href="{{url('scelte')}}">Start</a>
                            </div>
                            <span id="burger" onclick="openNav()">&#9776;Menu</span>
                        </div>
                    </nav>
                    
            </header>
            <section class="dad" id="dadH">
                <div class="scambi2">
            <section class="dad" id="dadH4"> 
  
                <p id="p1">I tuoi Giocatori </p>  
                    <div class="form-sc" id="form-sc2">
                        
                    </div>
                </section>
                <section class="dad" id="dadH3">   
                <p id="p1">Giocatori disponibili</p>  
                    <div class="form-sc" id="form-sc">
                        
                    </div>
                </section>
                </div>
                <div class="col">
                    <p id="p1">Compila i campi per proporre lo scambio.</p>
                    <p class="error">{{$error}}</p>

                    <form action="" method="post">
                    <input type="hidden" name="_token" value="{{$csrf_token}}">
                        <div class="form-group">
                            <label> Identificativo del tuo giocatore:</label>
                            <input type="text" name="ssn1" class="form-control" required>
                        </div>

                        <div class="form-group">
                        <input type="hidden" name="_token" value="{{$csrf_token}}">
                            <label> Identificativo del giocatore che vorresti:</label>
                            <input type="text" name="ssn2" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <input type="submit" name ="submit" class="btn btn-submit" value="Invia richiesta">
                        </div>
                </div>
            </section>


            <footer>
                <address><strong> Vecchio Gerardo 1000012124</strong></address>
            </footer>
        
        </body>

    </html>