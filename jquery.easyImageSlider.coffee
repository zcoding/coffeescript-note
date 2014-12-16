#default options
defaults = 
  effect: "translate"
  speed: 300
  interval: 1500
  onSwitch:
    -> false
  selector: ''

########## Class Player
class Player
  constructor: (list = [], animation = -> false) ->
    itemList = ({item: item, index: i} for item, i in list)

  # @private 队列长度
  Length = 0

  # @private 轮播队列
  itemList = []

  # @private 轮播控制计时器
  autoTimer = null

  # @private 轮播动画函数
  animateFunc = -> false

  # @public 自动播放
  autoPlay: ->
      autoTimer = setInterval (->
        animateFunc.apply @, [itemList[i].item, i] for i in [1...Length]
        updateIndex.apply
        false
        ), 1500

  # @public 暂停播放
  pause: ->
    clearInterval autoTimer

  # @public 跳到上一张
  prev: ->
    false

  # @public 跳到下一张
  next: ->
    false

  # @public 跳到指定的一张
  slide2: ->
    false

  # @public 改变动画
  changeAnimation: (func) ->
    if !isFunction(func) then false else animateFunc = func
########## Class Player

$.fn.easyImageSlider = (options) ->
  $this = $ @
  options = $.extend {"width": $this.width, "height": $this.height}, defaults, options
  $items = $.children options.selector
  $this.css CSS.holder
  $items.css CSS.item
  Width = options.width
  Height = options.height
  Total = $items.length
  jItemList = []
  $items.each (index) ->
    $this = $(this)
    $this.css "left", index * Width
    jItemList.push $this

  new Player jItemList, ($item, index) ->
    $item
    .css {
      left: index * Width
    }
    .animate {
      left: (index - 1) * Width
    }, 800
