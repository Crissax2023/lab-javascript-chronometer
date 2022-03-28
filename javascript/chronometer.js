class Chronometer {
  currentTime = 0;
  intervalId = null;
  constructor() {
    // ... your code goes here

  }
 

  start(callback) {
    // ... your code goes here
    
    this.intervalId=setInterval(() => {

      this.currentTime += 1
      callback()
    }, 1000)
    
  }

  getMinutes() {
    // ... your code goes here
    return (this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime % 60)

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let num = "0" + value
    return num.slice(-2)

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let min = this.getMinutes()
    let seg = this.getSeconds()
    let two = this.computeTwoDigitNumber(min)
    let two2 = this.computeTwoDigitNumber(seg)
    return `${two}:${two2}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
