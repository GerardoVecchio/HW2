?>
<!DOCTYPE html>
    <html>
        <head> 
            <meta charset="utf-8"> 
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel = "stylesheet" href ="mhw3.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto+Mono&display=swap" rel="stylesheet">
            <link rel="shortcut icon" href="https://images.vexels.com/media/users/3/129334/isolated/preview/5e167ebc8f4491a5b2b123c57218c034-basketball-player-circle-icon-by-vexels.png">
            <script src="{{url('/Loading2.js')}}" defer="true"></script>
            <script src="{{url('/OtherFunctions.js')}}" defer="true"></script> 
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

            <section class="dad" name="contenuto" id='dadF'>
                <div class="scelte" id="ChoiceSection">
                    
                    <h2>Le tue scelte</h2>
                    
                <form action='' method='post'>
                @if($error !='')
                    <p class="error">{{$error}}</p>
                @endif
                    <div class='team-grid' id='choices'>
                    
                    </div>
                    <div class='team-grid' id='choicep'>

                    </div>

                    <input type="submit" name ="submit" id="btn-submit" value="Conferma Squadra">
                </form>
                </div>
                
                
                <div class='contenuto'>
                        <div class='box-squadre' id='box-squadre'>   
                            <h1>Scegli il logo della tua squadra</h1>
                            <input type='text' id='searchBar' onkeyup='search()' placeholder="inserisci il nome della squadra">
                            <div class='team-grid' id='team-grid'>

                                
                            </div>
                        </div> 
                        
                        <div class='box-giocatori' id='box-giocatori'>
                            <h1>Scegli i componenti del tuo team</h1>
                            <input type='text' id='searchBarG' onkeyup='searchG()' placeholder="inserisci il nome del giocatore">
                            <div class='team-grid' id='player-grid'>
                        
                        </div>
                </div>
            </section>
            
            <footer>
                <address><strong> Vecchio Gerardo 1000012124</strong></address>
            </footer>
        
        </body>

    </html>