<template>
  <div class="mt-4">
    <b-row>
      <b-col class="text-center d-none d-sm-block d-md-none ">
        <img src="../assets/profile-photo.svg" class="profile-image" />
      </b-col>
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
        <b-button pill variant="primary" size="lg" class="mt-4">
          <b-icon icon="download" class="mx-2"></b-icon>
          RESUME
        </b-button>
      </b-col>
      <b-col class="text-right d-md-block d-sm-none">
        <img src="../assets/profile-photo.svg" class="profile-image" />
      </b-col>
    </b-row>
    <b-row class="d-flex justify-content-center my-5">
      <div class="mouse"></div>
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

.sub-title {
  font-weight: bold;
  color: #e2e2e2;
  line-height: 44px;
}
.typewrite {
  color: #80ffdb;
  font-size: 24px;
}
.scroll-down {
  width: 56px;
  height: 100px;
}

/* Mouse Scroll Down Animation */
.mouse {
  width: 50px;
  height: 90px;
  border: 3px solid #FFF;
  border-radius: 60px;
  position: relative;
}
.mouse::before {
  content: "";
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(197, 195, 195);
  border-radius: 50%;
  opacity: 1;
  animation: wheel 2s infinite;
  -webkit-animation: wheel 2s infinite;
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}

@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}
</style>
