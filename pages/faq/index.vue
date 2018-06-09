<template>
  <section class="container">
    <h1 class="title">
      Frequently Asked Questions
    </h1>
    <div class="clear">
      <h3>
        Below are a list of frequently asked questions and answers. Hopefully these will help you better understand Diet in the Drive-Thru.
      </h3>
    </div>

    <button class="accordion">What is Diet in the Drive-Thru?</button>
    <div class="panel">
      <p>Diet in the Drive-Thru is the answer to your healthy eating on the go issues. We all have times where we 
        can not stick to a diet because we didn't have time to cook our food. Fear Not! Diet in the Drive-Thru allows
        users to search for foods that meet their specific criteria. This may include, price, calories, grams of fat, and
        a plethora of other filtering options. Once you have met your needs, you can place an order with the click of a 
        button. You may now kick back and relax, knowing that you made the right food choice.
      </p>
    </div>

    <button class="accordion">How do I search for my meal?</button>
    <div class="panel">
      <p>To search for a meal you have to follow some very basic steps.</p>
      <ol>
        <li>Go the home page and enter the zip code you are looking to order from.</li>
        <li>Filter for the criteria you are looking for.</li>
        <li>Once you narrow down what items you would like to order, add them to your cart.</li>
        <li>Review your order and checkout</li>
        <li>Last but not least, enjoy your delicious meal!</li>
      </ol>
    </div>

    <button class="accordion">Can I suggest a new restaurant for Diet in the Drive-Thru?</button>
    <div class="panel">
      <p>Absolutely! Our database is constantly being updated and new restaurants will help us ensure we continue to grow.</p>
    </div>   

    <button class="accordion">What should I do if I didn't receive email confirmation that my order is in the works?</button>
    <div class="panel">
      <p>
      <ol>
        <li>Confirm that the message is not in your spam box</li>
        <li>Contact Us to confirm at <a href='mailto:help@dietinthedrivethru.com'>help@dietinthedrivethru.com</a></li>
        <li>Once you narrow down what items you would like to order, add them to your cart.</li>
        <li>Review your order and checkout</li>
        <li>Last but not least, enjoy your delicious meal!</li>
      </ol>
      </p>
    </div>    

    <button class="accordion">Does Diet in the Drive-Thru do catering orders?</button>
    <div class="panel">
      <p>At the moment, our service does not allow for catering orders.</p>
    </div>   

    <button class="accordion">What are the fees involved when using Diet in the Drive-Thru?</button>
    <div class="panel">
      <p>As a customer, there are no fees involved when using our services.</p>
    </div> 

    <button class="accordion">Where did all of the restaurant ratings and reviews come from?</button>
    <div class="panel">
      <p>As a customer, you will have the opportunity to rate all of the restaurants you have ordered from in our database. As users begin to use our platform, the ratings will begin to show what the most popular items are on the menu.</p>
    </div>           

    <button class="accordion">Do I have to tip my driver? (Delivery Person)</button>
    <div class="panel">
      <p>Diet in the Drive-Thru does not charge a fee for delivery, however we always recommend that you tip your driver. The drivers will receive 100% of the tips that are provided to them.</p>
    </div>           

    <button class="accordion">How do pickup orders work?</button>
    <div class="panel">
      <p>The ordering process is nearly identical for pickup or delivery. If you select pickup, the restaurant will be notified and you can walk right up to the counter for your order. There is no need to wait on any lines.</p>
    </div>           

    <button class="accordion">Can I have multiple delivery addresses for the same account?</button>
    <div class="panel">
      <p>Absolutely! Just remember to change the delivery location before you click submit and pay for your order.</p>
    </div>           


            
      </section>

</template>

<script>

</script>

<style scoped>

a {
  color: blue;
}

h1 {
  color: #e53737;
}

.clear {
  clear: both;
  margin: 1em;
}

.accordion {
    background-color: #a2f4aa;
    color: #e53737;
    cursor: pointer;
    padding: 18px;
    width: 80%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
}

.active, .accordion:hover {
    background-color: #ccc;
}

.panel {
    padding: 0 18px;
    background-color: white;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
    text-align: center;
}

</style>