<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/map">Map</nuxt-link></li>
        <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
        <li><nuxt-link to="/menuItems">Menu Items</nuxt-link></li>
        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>

header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1E2124;
}

ul {
  margin: 0rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
}

nav li {
  font-family: "Bree Serif";
  font-size: 1.5rem;
  color: white;
  padding: 12px 12px 12px 12px;
  vertical-align: middle;
}

nav li:hover {
  background-color: #4E5F70;
  transition: 0.2s ease-in-out;
}

a {
  text-decoration: none;
  color: white;
}

</style>
