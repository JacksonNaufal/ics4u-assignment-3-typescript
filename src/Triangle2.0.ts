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

  // this is a constructor for the inputs
  constructor(lengthA: number, lengthB: number, lengthC: number) {
    this.sideA = lengthA
    this.sideB = lengthB
    this.sideC = lengthC
  }

  // This checks the validity of the triangle
  isTriangleValid(): boolean {
    if (
      this.sideA + this.sideB <= this.sideC ||
      this.sideB + this.sideC <= this.sideA ||
      this.sideA + this.sideC <= this.sideB
    ) {
      return false
    } else {
      return true
    }
  }

  // This is where the triangle name is created
  triangleName(): string {
    if (!this.isTriangleValid()) {
      const shape = '-1'
      return shape
    } else if (this.sideA === this.sideB && this.sideB === this.sideC) {
      const shape = 'Equilateral Triangle'
      return shape
    } else if (
      this.sideA === this.sideB ||
      this.sideB === this.sideC ||
      this.sideA === this.sideC
    ) {
      const shape = 'Isoceles Triangle'
      return shape
    } else if (
      this.sideA * this.sideA + this.sideB * this.sideB ===
        this.sideC * this.sideC ||
      this.sideC * this.sideC + this.sideB * this.sideB ===
        this.sideA * this.sideA ||
      this.sideC * this.sideC + this.sideA * this.sideA ===
        this.sideB * this.sideB
    ) {
      const shape = 'Right angle Triangle'
      return shape
    } else {
      const shape = 'Scalene Triangle!'
      return shape
    }
  }

  // This is where the perimeter is calculated
  trianglePerimeter(): number {
    if (!this.isTriangleValid()) {
      const perimeter = -1
      return perimeter
    } else {
      const perimeter = this.sideA + this.sideB + this.sideC
      return perimeter
    }
  }

  // This calculates the semiperimeter of the triangle
  triangleSemiperimeter(): number {
    if (!this.isTriangleValid()) {
      const semiperimeter = -1
      return semiperimeter
    } else {
      const semiperimeter = (this.sideA + this.sideB + this.sideC) / 2
      return semiperimeter
    }
  }

  // This is where the area of the triangle is calculated
  triangleArea(): number {
    if (!this.isTriangleValid()) {
      const area = -1
      return area
    } else {
      const semiperimeterArea = this.triangleSemiperimeter()
      const area = Math.sqrt(
        semiperimeterArea *
          (semiperimeterArea - this.sideA) *
          (semiperimeterArea - this.sideB) *
          (semiperimeterArea - this.sideC)
      )
      Math.round(area)
      return area
    }
  }

  // This calculates angles of the triangle
  triangleAngle(side: number): number {
    if (!this.isTriangleValid()) {
      const angle = -1
      return angle
    } else {
      let angle: number
      const topSideA = Math.pow(this.sideA, 2)
      const topSideB = Math.pow(this.sideB, 2)
      const topSideC = Math.pow(this.sideC, 2)
      if (side === 1) {
        angle = Math.acos(
          (topSideB + topSideC - topSideA) / (2 * this.sideB * this.sideC)
        )
      } else if (side === 2) {
        angle = Math.acos(
          (topSideA + topSideC - topSideB) / (2 * this.sideA * this.sideC)
        )
      } else {
        angle = Math.acos(
          (topSideA + topSideB - topSideC) / (2 * this.sideA * this.sideB)
        )
      }
      return angle
    }
  }

  // the status of the sides.
  status(): void {
    console.log(`Triangle Validity Status: ${this.isTriangleValid()}`)
    console.log('The three sides were')
    console.log(`Side A ---> ${this.sideA}`)
    console.log(`Side B ---> ${this.sideB}`)
    console.log(`Side C ---> ${this.sideC}`)
  }
}
export = Triangle
