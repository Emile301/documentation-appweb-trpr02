# Code Review de Marek Boudreau, par Émile Lafleur

## Revue de code 01 - 13 avril 2025

### Remarque 01

::: info
Dans le code de Marek, l'inclusion de la vidéo dans le template est très bien fait et le template en général respecte bien toutes les attentes

**Code**

```ts
<template>
  <video
    autoplay
    muted
    loop
    src="../assets/mainMenuBackground.mp4"
    type="video/mp4"
    id="backgroundVideo"
  ></video>

  <header>
    <h1 id="title" class="yellowText">
      Dark Jack
    </h1>
  </header>

  <main class="d-flex justify-content-center align-items-center  mt-5 pt-5">
    <button type="button" class="btn btn-lg btn-outline-primary starWarsButton">
      Jouer
    </button>
  </main>
</template>
```

:::

::: info
Dans le code de Marek, l'inclusion du CSS est majoritairement fait dans la section style de HomeView.vue. Il devrait placer la plupart de ce CSS dans un fichier CSS qui serait partager sur l'ensemble du projet puisqu'il sagit de CSS qui sera réutilisé dans plusieurs view et components.

**Code**

```ts
<style>
#backgroundVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

header{
  position: relative;
  z-index: 1;
}

main{
  position: relative;
  z-index: 1;
}

.yellowText{
  color: #ffe81f;
  text-align: center;
}

#title{
  font-size: 90px;
}

.btn-outline-primary {
  border-color: #ffe81f;
  color: #ffe81f;
  border-width: 3px;
}

.btn-outline-primary:hover {
  background-color: #ffe81f;
  color: white;
  border-color: #ffe81f;
}

.btn-outline-primary:active:focus {
  background-color: #ffe81f;
  border-width: 2px;
  border-color: #f3dd23;
}

.starWarsButton{
  font-size: 1.25rem;
}
</style>
```

:::

## Revue de code 02 - 20 avril 2025

## Revue de code 03 - 27 avril 2025
