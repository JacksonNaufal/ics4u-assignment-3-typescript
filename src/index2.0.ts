/**
 * The program is the classic
 * triangle calculation program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-17
 */

// Imports
import Triangle from './Triangle'
import promptSync from 'prompt-sync'

const prompt = promptSync()

// the beggining of the program
console.log('Enter your triangles sides(cm)')
const sA = prompt('Enter your first side: ')
const sideA = parseFloat(sA)
const sB = prompt('Enter your second side: ')
const sideB = parseFloat(sB)
const sC = prompt('Enter your third side: ')
const sideC = parseFloat(sC)
console.log(' ')

try {
  // Checks if any side is less than or equal to 0
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Invalid Input, Side can not be less than 1!')
    // Checks if any input is a number
  } else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log('Invalid Input, not a Integer')
  } else {
    // defining triangle
    const triangle = new Triangle(sideA, sideB, sideC)

    // The three sides
    triangle.status()

    // triangle validity status
    console.log(`Triangle Validity Status: ${triangle.isTriangleValid()}`)
    // The shape of the triangle
    console.log(`\nThe shape is a ${triangle.triangleName()}`)

    // the area and perimeter and semiperimeter
    console.log('\nThe Perimeter and Area are below!')
    console.log(`\nThe perimeter is ${triangle.trianglePerimeter()}cm`)

    console.log(`The semiperimeter is ${triangle.triangleSemiperimeter()}`)
    // The area
    console.log(`The area is ${triangle.triangleArea()}cm²`)

    // The angles are below
    console.log('\nThe angles are below!')

    // This is angle A
    console.log('Angle A is ' + triangle.triangleAngle(1).toFixed(4) + ' rad')

    // This is angle B
    console.log('Angle B is ' + triangle.triangleAngle(2).toFixed(4) + ' rad')

    // This is angle C
    console.log('Angle C is ' + triangle.triangleAngle(3).toFixed(4) + ' rad')
  }
} catch (e) {
  console.log('Not a Valid Input!')
}
console.log('\nDone.')
