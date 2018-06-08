<template>
  <section class="container burger-background">
    <h1 class="title">
      Diet in the Drive-Thru
    </h1>
    </br>
    <h2 class="enterZip">
      Enter your zip code so we can find the best deals available.
    </h2>
    </br>
    <div id="zipForm">
      <form>
        <b>Zip Code:</b>
      </br></br>
        <input type="text" name="zipcode" placeholder="Please Enter Zip Code"></br></br>
        <a href="/map" class="btn btn-primary">Submit</a>
      </form>
    </div>
  </section>
</template>

<script>


</script>

<style scoped>

h1 {
  color: white;
  font-size: 9rem;
}

.enterZip {
  text-shadow: 2px -2px 0 black;
  font-size: 1.5rem;
}

.burger-background {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/background.jpg");
  background-size: cover;
  height: 1000px;
  display: table;
  width: 100%;
  background-position: center top;
  color: white;
}

.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    text-decoration: none;
}

.btn {
    text-decoration: none;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

input {
  width: 15%;
  text-align: center;
  padding: 0.5rem;
  font-family: "Passion One", sans-serif;
}

</style>

