document.addEventListener("click", function(event) {

  fetch("https://neurvid.herokuapp.com", function(req,res) {
    console.log("Wake-up call for Neurvid")
  })

  fetch("https://freqexam.herokuapp.com", function(req,res) {
    console.log("Wake-up call for Freq Exam")
  })

  fetch("https://freq-report.herokuapp.com/?name=A&lower=20&upper=15000", function(req,res) {
    console.log("Wake-up call for freq report")
  })

  console.log("XD")
})
