$(document).ready(function(){
  Frequency.fetch().then(function(frequencies){
    frequencies.forEach(function(frequency){
      var view = new FrequencyView(frequency)
      // view.render();
    })
  })
})