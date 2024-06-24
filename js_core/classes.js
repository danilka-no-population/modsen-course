class Rectangle{
    constructor(width = 1, height = 1){
        this.width = width
        this.height = height
    }

    calcArea(){
        return this.width * this.height
    }

    calcPerimeter(){
        return 2 * (this.width + this.height)
    }
}

const rect1 = new Rectangle(12, 10)
console.log(rect1.calcArea()) // 120
console.log(rect1.calcPerimeter()) // 44