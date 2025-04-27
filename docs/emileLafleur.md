# Code Review de Émile Lafleur, par Marek Boudreau

## Revue de code 01 - 13 avril 2025
::: info

### Correction 01

::: info
Dans le code de Émile, la documentation à très bien été créer avec un intégration simple à prendre en main.
**Code Incorrect**

```ts
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Docs-appweb-trpr02"
  text: "Revue de code du travail pratique 02 de Émile Lafleur et Marek Boudreau"
  actions:
    - theme: brand
      text: Revue de code du code de Émile Lafleur
      link: /emileLafleur
    - theme: brand
      text: Revue de code du code de Marek Boudreau
      link: /marekBoudreau
---
```
::: info
La documentation est biens effectué et l'écran d'acueille est très accueillant.
Les critères pour l'évaluation sont respectés
:::
```ts

# template à suivre pour la revue de code

<!----------------------------->

::: info

### Correction 01

::: info
Dans le code de Jimmy, Il y a ceci à corriger

**Code Incorrect**
```

:::La documentation de Émile est accompagné d'un gabarit à suivre, permettant d'avoir une
    cohérance entre les dates et la personne qui l'a fait et simplifiant aussi la tâche l'ors du code review.


## Revue de code 02 - 20 avril 2025
::: info
Dans le code de émile, les système utilitaire comme les différents services pour accèder à la base de données sont très biens implémentés comme le service pour accèder avoir le tableau des scores est très biens construit et simple à utiliser
:::

**Code**

```ts
const API_URL = 'http://127.0.0.1:3000'

async function getRanking () {
  const { data } = await axios.get(`${API_URL}/ranking`)
  return data
}

async function createRankingPost (postRanking: PostRanking) {
  await axios.post(`${API_URL}/ranking`, postRanking)
}

export const rankingService = {
  getRanking,
  createRankingPost
}
```

::: info
C'est égallement le cas pour celui permettant d'Avoir les personnages
:::

**Code**
```ts
const API_URL = 'http://127.0.0.1:3000'

async function getCharacter (id: number) {
  const { data } = await axios.get(`${API_URL}/characters?_page=${id}&_limit=1`)
  return data
}

async function getNumberCharacters () {
  const response = await axios.get(`${API_URL}/characters?_page=1&_limit=1`)
  return response.headers['x-total-count']
}

export const rankingService = {
  getCharacter,
  getNumberCharacters
}
```

::: info
Et pour accéder aux vaisseaux
:::

**Code**
```ts
const API_URL = 'http://127.0.0.1:3000'

async function getVaisseaux () {
  const { data } = await axios.get(`${API_URL}/ships`)
  return data
}

export const vaisseauxService = {
  getVaisseaux
}

```
## Revue de code 03 - 27 avril 2025
:::info
Émile s'est spécialisé dans la création de tests optimal pour la vérification de tous les éléments dans la page. Comme on peut
le ramarquer dans le code ci-bas, le test vérifie biens que CHAQUES éléments de la page sont biens présent. Merci Émile pour ton travail
acharné.
:::

**Code**
```ts
  it('renders properly when valide', () => {
    const wrapper = mount(nameInput, { props: { valide: true } })

    //card
    expect(wrapper.find('div[class="card text mb-3"]').exists()).toBeTruthy()

    //titre du champ attendu
    expect(wrapper.find('h5').exists()).toBeTruthy()
    expect(wrapper.find('#nom').exists()).toBeTruthy()

    //champ nom attendu
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
    expect(wrapper.find('#textNom').exists()).toBeTruthy()

    //champ erreur pas attendu
    expect(
      wrapper.find('div[class="invalid-feedback"]').exists()
    ).not.toBeTruthy()
  })
```

:::info
Et ce n'est pas tout! non seulement ses tests vérifient la présence des différents éléments dans la page, mais en plus, ils vérifient
leur fonctionnement! Le test ci-dessous vérifie que le nom est bien émis une fois enregistré. Ce qui permet d'épargner a nos coeurs
le stress d'un boutton qui ne marcherait malencontreusement pas.
:::

**Code**
```ts
  it('au changement du nom, le nouveau nom est émit', async () => {
    const wrapper = mount(nameInput, { props: { valide: true } })
    const NomSelector = wrapper.find('input[type="text"]')
    const nom = 'nomTest'

    await NomSelector.setValue(nom)

    expect(wrapper.emitted('update:nom')![0]).toEqual([nom])
  })
```

:::info
En plus des nombreux tests éxécuté à la perfection, mon Camarade de classe et partenaire Émile Lafleur à brillament fait des bouttons
de navigations dans l'applications. Ce qui s'avère très pratique pour les aventuriers cherchant à naviger dans l'application. Émile maitrise
la création de boutton comme personne.
"On ne va jamais aussi loin que lorsqu'on ne sait pas où on va." - Christophe Colomb
:::

**Code**
```ts
<script setup lang="ts">
import { ref } from 'vue'

const affichage = ref('none')

function confirmationMessage () {
  affichage.value = 'flex'
}

function annuler () {
  affichage.value = 'none'
}
</script>

<template>
  <button
    id="GoRanking"
    class="btn btn-lg ms-2 btn-outline-primary text-standard btn-dimension"
    @click="confirmationMessage()"
  >
    aller au classement
  </button>

  <div
    id="fullscreenAlert"
    class="fullscreen-alert"
    :style="{ display: affichage }"
  >
    <div class="alert alert-danger">
      <div>
        <h2 class="text-standard"><i>"This is where the fun begin"</i></h2>
      </div>
      <p class="text-white text-contour">
        Voulez-vous vraiment aller au classement?
      </p>
      <p class="text-white text-contour">
        Votre progression ne sera pas sauvegardé!
      </p>

      <div class="row">
        <div class="col">
          <button
            id="cancel"
            class="btn btn-lg ms-2 btn-outline-primary btn-dimension text-vide"
            @click="annuler()"
          >
            annuler
          </button>
        </div>
        <div class="col">
          <RouterLink :to="{ name: 'Ranking' }">
            <button
              id="confirme"
              class="btn btn-lg ms-2 btn-outline-primary btn-dimension text-vide"
            >
              Classement
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
```