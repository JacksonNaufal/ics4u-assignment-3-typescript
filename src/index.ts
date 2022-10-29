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
console.log('Enter your triangles sides')
const sA = prompt('Enter your first side: ')
const sideA = parseFloat(sA)
const sB = prompt('Enter your second side: ')
const sideB = parseFloat(sB)
const sC = prompt('Enter your third side: ')
const sideC = parseFloat(sC)
console.log(' ')

try {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Invalid Input, Side can not be less than 1!')
  } else if (
    sideA + sideB <= sideC ||
    sideB + sideC <= sideA ||
    sideA + sideC <= sideB
  ) {
    console.log('Invalid Input, To Long!')
  } else if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log('Invalid Input, not a Integer')
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

    // the area and perimeter
    console.log('\nThe Perimeter and Area are below!')

    console.log(`\nThe perimeter is ${triangle.getPerimeter()}cm²`)

    // The area
    triangle.triangleArea(sideA, sideB, sideC)
    console.log(`The area is ${triangle.getArea()}cm²`)

    // The angles are below
    console.log('\nThe angles are below!')
    triangle.angleA(sideA, sideB, sideC)
    console.log(`Angle A is ${triangle.getAngleA()}`)

    triangle.angleB(sideA, sideB, sideC)
    console.log(`Angle A is ${triangle.getAngleB()}`)

    triangle.angleC(sideA, sideB, sideC)
    console.log(`Angle A is ${triangle.getAngleC()}`)
  }
} catch (e) {
  console.log('Not a Valid Input!')
}
console.log('\nDone.')
