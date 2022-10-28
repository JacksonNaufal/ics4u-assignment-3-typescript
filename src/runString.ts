/**
 *
 * The program is a run program that splits an
 * array and finds the most used charactor.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-07
 */

import promptSync from 'prompt-sync'

// paramaters for my runCalculation function
/**
 * This function finds the run in the userInput
 *
 * @param {string} runWord is the userInput.
 * @returns {number} maxChar max charactor in string.
 */
function runCalculation(runWord: string): number {
  // variable holders for run
  // calculation
  let maxChar = 0
  let count = 0

  // This function is where the max run is calculated
  // the userInput is split, it find the highest string value
  // than it counts the amounts of charactors and returns it.
  // https://www.javascripttutorial.net/es6/javascript-arrow-function/
  userInput.split('').forEach((value) => {
    const charCount = userInput.split(value).length - 1
    if (count < charCount) {
      count = charCount
      maxChar = count
    }
  })
  return maxChar
}

const prompt = promptSync()

// program description text
console.log('This is a Run program!')
console.log('This program will calculate the run of STRINGS!')
console.log('STRING EX. xxyyyz, this STRING has a run of 3!')

// let userInput their string, and it checks the most
// used charactor within the text!
const userInput = prompt('Enter your run: ')

// this is where the userInput gets passed
// to the function
const runWord = userInput

// this is the max charactor
// within the program
const maxChar = runCalculation(runWord)

// this outputs what the highest number is
console.log('Calculating ...')
console.log(`The highest run is ${maxChar}!`)

// program end.
console.log('\nDone!')
