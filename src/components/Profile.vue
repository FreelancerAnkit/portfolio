<template>
  <div class="mt-4">
    <b-row>
      <b-col>
        <h1 class="title mt-3">
          Hi, I’m Ankit,<br />
          Fullstack Developer
        </h1>
        <p class="sub-title">Software Engineer Quest Global Pvt. Ltd.</p>
        <h1>
          <a
            class="typewrite"
            data-period="2000"
            data-type='[ "Im Passionate about work", "I Love to develop Software Products" ]'
          >
            <span class="wrap"></span>
          </a>
        </h1>
        <b-button pill variant="primary" size="lg" class="mt-3">
          <b-icon icon="download" class="mx-2"></b-icon>
          RESUME
        </b-button>
      </b-col>
      <b-col class="text-right">
        <img src="../assets/profile-photo.svg" class="profile-image" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {},
  mounted() {
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image {
  width: 400px;
  height: 400px;
}
.title {
  line-height: 88px;
  font-weight: bold;
}
.sub-title {
  font-weight: bold;
  color: #e2e2e2;
  line-height: 44px;
}
.typewrite {
  color: #80ffdb;
  font-size: 24px;
}
</style>
