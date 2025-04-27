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

::: info

### remarque 01

::: info
Dans le code de Marek, l'utilisation du watch pour emit un nouveau nom à chaque chagement est très habile.

**Code**

```ts
import { ref, watch } from "vue";

const emit = defineEmits(["update:nom"]);

watch(nom, (newValue) => {
  emit("update:nom", newValue);
  console.log(newValue);
});
```

:::

::: info

### remarque 01

::: info
Dans le code de Marek, l'utilisation des commentaire dans code donne de bonne information sur ce qu'il reste à faire.

**Code**

```ts
<main class="mt-5 pt-5">
    <div class="d-flex flex-column align-items-center">
      <button id="jouer" type="button" class="btn btn-lg btn-outline-primary starWarsButton">Jouer</button>
    </div>

    <!-- L'espace entre le boutton jouer et les trois éléments sera ici (mettre un mb sur la div en haut ou un mt sur celle en bas)-->
    <div class="d-flex justify-content-around w-100 mt-3">
      <NameInput @update:nom="updateNom" />

      <!--mettre le boutton du scoreboard ici-->>
      <VaisseauInput @update:vaisseau="updateVaisseau"/>
    </div>
  </main>
```

:::

## Revue de code 03 - 27 avril 2025

::: info

### remarque 01

::: info
Dans le code de Marek, l'utilisation des composantes pour permettre de diminuer la charge de la view GameView est très pratique.

**Code**

```ts
import PersonnageInfo from '../components/PersonnageInfo.vue'
import GestionVie from '../components/GestionVie.vue'
import VieEnnemi from '../components/VieEnnemi.vue'
import videobg from '../components/video.vue'
import RetourAuMenu from '../components/RetourAuMenu.vue'
import allerAuClassement from '../components/allerAuRanking.vue'
import messageMort from '../components/messageMort.vue'
import messageReussite from '../components/messageReussite.vue'
```

:::

::: info

### Correction 01

::: info
Dans le code de Marek, Le manque de test de la GameView est quand même assez élevée. Bien que tous les composantes soit bien testé, la classe GameView reste un peu mal testé.

**Code**

```ts
describe('GameView', () => {
  it('affichage correcte de la page de jeu', async () => {
    
    vi.mock('vue-router', () => ({
        useRoute: () => ({
          query: {
            nom: 'Test Nom',
            vaisseau: 'Vaisseau Test',
          },
        }),
    }))

    const wrapper = mount(GameView, {
        data() {
          return {
            creditsGagnes: 100
          }
        }
      })

    expect(wrapper.find('#niveauText').exists()).toBeTruthy() //le niveau actuelle est affiché
    expect(wrapper.find('#cgText').exists()).toBeTruthy() //le nombre de cg du joueur est affiché
    expect(wrapper.find('#nomText').exists()).toBeTruthy() //le nom du joueur est affiché
    expect(wrapper.find('#creditsGagnesText').exists()).toBeFalsy() //le nombre de crédits gagné n'est pas affiché
    expect(wrapper.find('#bouttonAttaquer').exists()).toBeTruthy() //Le boutton "attaquer" est affiché
  })
})
```

:::