/**
 * The program is the class
 * for the Vehicles
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-19
 */

class Triangle {
  private sideA: number
  private sideB: number
  private sideC: number
  private shape = ' '
  private perimeter = 0
  private semiperimeter = 0
  private area = 0
  private angleOne = 0
  private angleTwo = 0 
  private angleThree = 0
  private aSq = 0 
  private bSq = 0
  private cSq = 0

  // private array creation

  constructor(
    sideA: number,
    sideB: number,
    sideC: number,
  ) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
    }

    triangleName(sideA: number, sideB: number, sideC: number): string { 
    if (sideA == sideB && sideB == sideC) {
        return this.shape = 'Equilateral Triangle!'
    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
         return this.shape = 'Isoceles Triangle!'
    } else {
         return this.shape = 'Scalene Triangle!' 
    }
    }

    trianglePerimeter(sideA: number, sideB: number, sideC: number): void {
     this.perimeter = sideA + sideB + sideC
    }

    triangleArea(sideA: number, sideB: number, sideC: number): void {
        this.semiperimeter = ((sideA + sideB + sideC) / 2)

        this.area =  Math.sqrt(this.semiperimeter * (this.semiperimeter - sideA) * (this.semiperimeter - sideB) * (this.semiperimeter - sideC))
        Math.floor(this.area)
    }

    angleA(sideA: number, sideB: number, sideC: number): void {

        this.aSq = sideA ** 2
        this.bSq = sideB ** 2
        this.cSq = sideC ** 2
        this.angleOne = Math.acos((this.bSq + this.cSq - this.aSq) / (2 * this.bSq * this.cSq))
    } 

        angleB(sideA: number, sideB: number, sideC: number): void {

        this.aSq = sideA ** 2
        this.bSq = sideB ** 2
        this.cSq = sideC ** 2
        this.angleTwo = Math.acos((this.bSq + this.cSq - this.aSq) / (2 * this.bSq * this.cSq))
    }

        angleC(sideA: number, sideB: number, sideC: number): void {

        this.aSq = sideA ** 2
        this.bSq = sideB ** 2
        this.cSq = sideC ** 2
        this.angleThree = Math.acos((this.bSq + this.cSq - this.aSq) / (2 * this.bSq * this.cSq))
    }


    getArea(): number {
    return this.area
    }

    getPerimeter(): number {
    return this.perimeter
    }

    getShape(): string {
       return this.shape
    }

    getAngleA(): number {
        return this.angleOne
    }

    getAngleB(): number {
        return this.angleTwo
    }

    getAngleC(): number {
        return this.angleThree
    }


    status(): void {
      console.log('The three sides were')
      console.log(`Side A ---> ${(this.sideA)}`)
      console.log(`Side B ---> ${(this.sideB)}`)
      console.log(`Side C ---> ${(this.sideC)}`)
    }
}
export = Triangle
