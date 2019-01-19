<template>
  <div>
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <div class="header image_header">
        <img src="@/assets/images/kowloon_logo.png" class="header_logo">
        <img src="@/assets/images/banner2.png">
      </div>
      <div class="content">
        <b-container>
          <b-row>
            <b-col>
              <div class="tags">
                <h1>K</h1>
                <div class="tag">
                    <div class="tag-arrow"></div>
                    <div class="tag-body">
                        <span>about us</span>
                    </div>
                </div>
              </div>
              <h1 class="title mb-4">ABOUT US</h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" sm="8">
              <div class="mb-5">
                <h2 class="title">KOWLOON</h2>
                <p>Pet Concept, active since 1998, is developing, importing and exporting products for pets worldwide.<br><br>
                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae sequi nesciunt.</p>
              </div>
            </b-col>
            <b-col cols="12" sm="4" class="mb-5">
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
          <b-row>
            <b-col>
              <div class="mb-5">
                <h2 class="title mb-3">LEAVE US A MESSAGE</h2>
                <form action="about" @submit="checkForm">
                  <label for="email">E-mail</label><br>
                  <div v-if="emailError != null">
                    <span class="errormessage">{{ emailError }}</span><br>
                    <input type="text" name="email" v-model="email" id="email" class="mb-4 inputerror" placeholder="name@domain.com">
                  </div>
                  <div v-else>
                    <input type="text" name="email" v-model="email" id="email" class="mb-4" placeholder="name@domain.com">
                  </div>
                  <br>
                  <label for="textarea">Your message</label><br>
                  <div v-if="messageError != null">
                    <span class="errormessage">{{ messageError }}</span><br>
                    <textarea name="message" id="textarea" v-model="message" class="mb-4 inputerror" rows="6" placeholder="Write your message here."></textarea>
                  </div>
                  <div v-else>
                    <textarea name="message" id="textarea" v-model="message" class="mb-4" rows="6" placeholder="Write your message here."></textarea>
                  </div>
                  <input type="submit" class="pinkbutton" value="Send">
                </form>
              </div>
              <div>
                  <h2 class="title">FREQUENTLY ASKED QUESTIONS</h2>
                  <FAQquestions></FAQquestions>
                  <div class="d-flex justify-content-center justify-content-sm-end mb-2">
                    <router-link to="about" class="emphasis">More questions?</router-link>
                  </div>
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
import FAQquestions from '@/components/FAQquestions.vue';

export default {
  name: 'about',
  components: {
    Navigation,
    Search,
    FAQ,
    FAQquestions
  },
  data () {
    return {
      email: null,
      message: null,
      emailError: null,
      messageError: null
    }
  },
  methods:{
    checkForm: function (e) {   
      if (!this.email) {
        this.emailError = "email required";
      }
      else if (this.email.includes("@") && this.email.includes(".")) {
        this.validEmail = true;
        this.emailError = null;
      }
      else {
        this.emailError = "invalid email";
      }
      if (!this.message) {
        this.messageError = "message required";
      }
      else {
        this.messageError = null;
      }

      if (this.emailError == null && this.messageError == null) {
          return true;
      }

      e.preventDefault();
    }
  }
}
</script>
