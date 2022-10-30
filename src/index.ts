/**
 * The program is the classic
 * Vehicle stats program
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
    console.log('Is triangle valid: false')
    // Checks if any input is a number
  } else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log('Invalid Input, not a Integer')
    console.log('Is triangle valid: false')
  } else if (
    sideA + sideB <= sideC ||
    sideB + sideC <= sideA ||
    sideA + sideC <= sideB
  ) {
    console.log('Invalid Input, to long!')
    console.log('Is triangle valid: false')
  } else {
    // defining triangle
    const triangle = new Triangle(sideA, sideB, sideC)

    // The three sides
    triangle.status()

    // The shape of the triangle
    triangle.triangleName(sideA, sideB, sideC)
    console.log(`\nThe shape is a ${triangle.getShape()}`)

    // The perimeter
    triangle.trianglePerimeter(sideA, sideB, sideC)

    // the area and perimeter and semiperimeter
    console.log('\nThe Perimeter and Area are below!')
    console.log(`\nThe perimeter is ${triangle.getPerimeter()}cm`)

    // The semiperimeter
    triangle.triangleSemiperimeter(sideA, sideB, sideC)
    console.log(`The semiperimeter is ${triangle.getSemiperimeter()}`)
    // The area
    triangle.triangleArea(sideA, sideB, sideC)
    console.log(`The area is ${triangle.getArea()}cm²`)

    // The angles are below
    console.log('\nThe angles are below!')

    // This is angle A
    triangle.angleTriangle(sideA, sideB, sideC)
    console.log(`Angle A is ${triangle.getAngleA()}°`)

    // This is angle B
    console.log(`Angle B is ${triangle.getAngleB()}°`)

    // This is angle C
    console.log(`Angle C is ${triangle.getAngleC()}°`)
  }
} catch (e) {
  console.log('Not a Valid Input!')
}
console.log('\nDone.')
