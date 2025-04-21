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
