/**
 * The program is the class
 * for the Triangle
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2022-10-29
 */

class Triangle {
  // These are constructor variables
  private readonly sideA: number
  private readonly sideB: number
  private readonly sideC: number

  // These are variables
  private shape = ' '
  private perimeter = 0
  private semiperimeter = 0
  private area = 0
  private angleOne = 0
  private angleTwo = 0
  private angleThree = 0
  private topSideA = 0
  private topSideB = 0
  private topSideC = 0
  private readonly triangleDegree = 180
  private readonly degree = 3.14

  // this is a constructor for the inputs
  constructor(sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  // This is where the triangle name is created
  triangleName(sideA: number, sideB: number, sideC: number): string {
    if (sideA === sideB && sideB === sideC) {
      return (this.shape = 'Equilateral Triangle!')
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      return (this.shape = 'Isoceles Triangle!')
    } else if (
      sideA * sideA + sideB * sideB === sideC * sideC ||
      sideC * sideC + sideB * sideB === sideA * sideA ||
      sideC * sideC + sideA * sideA === sideB * sideB
    ) {
      return (this.shape = 'Right angle Triangle!')
    } else {
      return (this.shape = 'Scalene Triangle!')
    }
  }

  // This is where the perimeter is calculated
  trianglePerimeter(sideA: number, sideB: number, sideC: number): void {
    this.perimeter = sideA + sideB + sideC
  }

  // This is where the area of the triangle is calculated
  triangleArea(sideA: number, sideB: number, sideC: number): void {
    this.semiperimeter = (sideA + sideB + sideC) / 2

    this.area = Math.sqrt(
      this.semiperimeter *
        (this.semiperimeter - sideA) *
        (this.semiperimeter - sideB) *
        (this.semiperimeter - sideC)
    )
    Math.floor(this.area)
  }

  // This calculates angle A of the triangle
  angleA(sideA: number, sideB: number, sideC: number): void {
    this.topSideA = sideA * sideA
    this.topSideB = sideB * sideB
    this.topSideC = sideC * sideC

    this.angleOne =
      Math.acos(
        (this.topSideB + this.topSideC - this.topSideA) / (2 * sideB * sideC)
      ) *
      (this.triangleDegree / this.degree)
    this.angleOne = Math.round(this.angleOne)
  }

  // This calculated angleB of the triangle
  angleB(sideA: number, sideB: number, sideC: number): void {
    this.topSideA = sideA * sideA
    this.topSideB = sideB * sideB
    this.topSideC = sideC * sideC

    this.angleTwo =
      Math.acos(
        (this.topSideA + this.topSideC - this.topSideB) / (2 * sideA * sideC)
      ) *
      (this.triangleDegree / this.degree)
    this.angleTwo = Math.round(this.angleTwo)
  }

  // This calculated angleC of the triangle
  angleC(sideA: number, sideB: number, sideC: number): void {
    this.topSideA = sideA * sideA
    this.topSideB = sideB * sideB
    this.topSideC = sideC * sideC

    this.angleThree =
      Math.acos(
        (this.topSideA + this.topSideB - this.topSideC) / (2 * sideA * sideB)
      ) *
      (this.triangleDegree / this.degree)
    this.angleThree = Math.round(this.angleThree)
  }

  // returns the area
  getArea(): number {
    return this.area
  }

  // returns the perimeter
  getPerimeter(): number {
    return this.perimeter
  }

  // returns the shape
  getShape(): string {
    return this.shape
  }

  // returns Angle A
  getAngleA(): number {
    return this.angleOne
  }

  // returns Angle B
  getAngleB(): number {
    return this.angleTwo
  }

  // returns Angle C
  getAngleC(): number {
    return this.angleThree
  }

  // the status of the sides.
  status(): void {
    console.log('The three sides were')
    console.log(`Side A ---> ${this.sideA}`)
    console.log(`Side B ---> ${this.sideB}`)
    console.log(`Side C ---> ${this.sideC}`)
  }
}
export = Triangle
