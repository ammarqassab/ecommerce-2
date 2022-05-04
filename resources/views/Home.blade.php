<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}

        <!-- Styles -->

<style>
html {
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
:root {
--loadercolorbgc: linear-gradient(135deg, rgb(0, 140, 255), rgb(255, 0, 150));
--loadercolorboks: #fff;
}
.loader {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--loadercolorbgc);
    z-index: 100000000000000000000000000;
}
.hidden {
  /* animation: fadeout 2s;
  animation-fill-mode: forwards; */
  display: none;
}
@keyframes fadeout {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
/* This loader is collected ! I do not own it! */

.sk-cube-grid {
  width: 15vw;
  height: 15vw;
  margin: 100px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  border: 1px solid rgb(0, 0, 255);
  background-color: var(--loadercolorboks);
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

</style>
<!-- ammar -->

        {{-- <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
        />

        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

        <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

        <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script> --}}

        {{-- <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> --}}
<!-- ammar -->
    </head>
    <body>

        <!-- loader -->

    <div id="loader" class="loader">
        <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        </div>
    </div>

    <!-- end loader -->

        <div id="root"></div>

        <script src="{{asset('js/app.js')}}"></script>

        <script>
        // lodaer javascript
        window.addEventListener('load', function() {
            const loader = document.querySelector('.loader');
            loader.classList = ' hidden';
        });
        // end loader
        </script>
    </body>
</html>
