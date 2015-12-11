var PodcastView = function(podcast){
  var self = this;
  self.podcast = podcast;
  self.$el = $("<div class=podcast></div>")
  self.render();
}

PodcastView.prototype = {
  render: function(){
    var self = this;
    var html =$("<button class = 'btn podcast_show'>" + this.podcast.title + "</button>");
    $(self.$el).append(html);
    self.$el.on("click", function(){
    self.$el.html("<h4 class = podcast-name>" + "Podcast Name: " + self.podcast.title + "</h4><p class='podcast-description'>Description: " + self.podcast.description + "</p><a href='" + self.podcast.audio + "'><audio controls><source src='" + self.podcast.audio + "' type='audio/ogg'><source src='" + self.podcast.audio + "' type='audio/mpeg'>Your browser does not support the audio tag.</audio></a>");

    self.$el.siblings(".podcast").hide();
    $('.editFrequency').hide();
    $('.podcast-li').hide();
    self.renderEditPodcast();
    })
  },
  renderEditPodcast: function(){
    var self = this;
    var $el = $("<button class= btn deletePodcast> Delete Podcast </button>");
    this.$el.append($el);
    this.$el.find($el).on("click", function(){
      this.podcast.destroy().then(function(){
        this.$el.siblings(".podcast").show();
        this.$el.remove();
      })
      console.log("test");
    })
    },
//need to $pull from associated frequen.c

  };
