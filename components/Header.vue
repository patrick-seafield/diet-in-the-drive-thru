<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
        <li>Menu Items</li>
        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>

header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
}

ul {
  margin: 0rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
}

nav li {
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: lightgreen;
  font-weight: bold;
}

</style>