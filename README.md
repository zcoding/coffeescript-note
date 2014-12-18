#coffeescript-note

what? i'm learning coffeescript...

##函数
函数由可选的参数列表、箭头和函数体组成
    say = (you)-> "#{you}Say what ?"
函数允许设置默认参数，当实参为null或者undefined时将使用默认参数代替
    fill = (container, liquid = "coffee") ->
      "Filling the #{container} with #{liquid}..."
##对象和数组
对象和数组的定义看起来与JavaScript非常相似
当属性单独一行时，逗号是可选的
对象定义可以使用缩进的写法以省略花括号
    song = ["do", "re", "mi", "fa", "so"]
    singers = {Jagger: "Rock", Elvis: "Roll"}
    bitlist = [
      1,0,1
    ]
    kids = 
      brother:
        name: "Max"
        age: 11
      sister: 
        name: "Tda"
        age: 9
在JavaScript中不允许使用没有引号引住保留字（例如class）作为对象的属性
但是在CoffeeScript中，你可以使用保留字作为对象的属性，编译之后的JavaScript将会自动把保留字用引号引起来
    $('.account').attr class: 'active'
    log object.class
##词法作用域和变量安全性
    outer = 1
    changeNumbers = ->
      inner = -1
      outer = 10
    inner = changeNumbers()
所有的变量声明，在第一次出现的时候，就被放到离它最近的作用域的顶部
outer变量在函数内没有被重新声明，是因为它已经在作用域内，而inner第一次出现是在函数内，因此函数内的inner不能够改变外部的inner变量的值