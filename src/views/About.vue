<template>
  <div>
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <div class="header">
        <img src="@/assets/images/kowloon_logo.png" class="header_logo">
        <img src="@/assets/images/banner2.png" class="image">
      </div>
      <div class="content">
        <b-container>
          <b-row>
            <b-col>
              <div class="tags">
                <h1>K</h1>
                <span class="tag">about us</span>
              </div>
              <h1 class="title mb-4">ABOUT US</h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="8">
              <div class="mb-5">
                <h2 class="title">KOWLOON</h2>
                <p>Pet Concept, active since 1998, is developing, importing and exporting products for pets worldwide.<br><br>
                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae sequi nesciunt.</p>
              </div>
              <div class="mb-5">
                <h2 class="title mb-3">LEAVE US A MESSAGE</h2>
                <form>
                  <label for="email">E-mail</label><br>
                  <input type="text" id="email" class="mb-4" placeholder="name@domain.com"><br>
                  <label for="textarea">Your message</label><br>
                  <textarea name="message" id="textarea" class="mb-4" rows="6" placeholder="Write your message here."></textarea>
                  <input type="button" class="pinkbutton" value="Send">
                </form>
              </div>
              <div>
                  <h2 class="title">FREQUENTLY ASKED QUESTIONS</h2>
                  <div class="faq-question mb-2 collapsed">
                    <div class="faq-header">
                      <p>Dit is een vraag</p>
                      <img src="@/assets/images/dropdown.png" alt="">
                    </div>
                    <div class="faq-content">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</span>
                    </div>
                  </div>
                  <div class="faq-question mb-2 collapsed">
                    <div class="faq-header">
                      <p>Dit is een vraag</p>
                      <img src="@/assets/images/dropdown.png" alt="">
                    </div>
                    <div class="faq-content">
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</span>
                    </div>
                  </div>
                <div class="faq-question mb-2 collapsed">
                  <div class="faq-header">
                    <p>Dit is een vraag</p>
                    <img src="@/assets/images/dropdown.png" alt="">
                  </div>
                  <div class="faq-content">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</span>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col cols="4">
              <div class="contact">
                <h2 class="title">CONTACT</h2>
                <ul>
                  <li>Deckx Johan</li>
                  <li>Bosdreef 7</li>
                  <li>2200 Herentals</li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Nav.vue';
import Search from '@/components/Search.vue';
import FAQ from '@/components/FAQ.vue';

export default {
  name: 'about',
  components: {
    Navigation,
    Search,
    FAQ
  },
  methods: {
    faqOnClick: function () {
      document.querySelector(".faq-question").classList.toggle("collapsed");
    }
  },
  mounted: function() {
    document.querySelector(".faq-header").addEventListener('click', this.faqOnClick);
  }
}
</script>
