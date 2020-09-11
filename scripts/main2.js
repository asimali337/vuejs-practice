var webWrapper = new Vue({
  el: "#wrapper",
  data: {
    name: "Online web channel",
    playlist: "vuejs course",
  },
  methods: {
    run: function (channel, name) {
      return "i am " + name + " and i have my " + channel;
    },
    welcome: function (dayTime) {
      return "Good " + dayTime;
    },
    valueAccess: function () {
      return this.name + " " + this.playlist;
    },
  },
});
