// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */


function Door0(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var area = this.popup.querySelector('.door-riddle'),
        circle = this.popup.querySelector('.door-circle');

    var positions = {
        center: {
            y: circle.getBoundingClientRect().top + circle.offsetHeight / 2,
            x: circle.getBoundingClientRect().left + circle.offsetWidth / 2
        },
        R: circle.offsetWidth / 2
    }

    function createPoint(x, y) {
        var point = document.querySelector('.door-point') || document.createElement('div');
        point.classList.add('door-point');
        point.style.left = x - 10 + 'px';
        point.style.top = y - 10 + 'px';

        area.appendChild(point);
        createSvg(x, y)
    }

    function createSvg(x,y) {
        var svg = document.querySelector('#svgDoc') || document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttributeNS(null,"id","svgDoc");
        svg.setAttributeNS(null,"height","100%");
        svg.setAttributeNS(null,"width","100%");

        var newLine = svg.querySelector('#line') || document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id','line');
        newLine.setAttribute('x1',positions.center.x);
        newLine.setAttribute('y1',positions.center.y);
        newLine.setAttribute('x2',x);
        newLine.setAttribute('y2',y);
        newLine.setAttribute("stroke", "red")

        svg.appendChild(newLine);

        area.appendChild(svg);
    }

    function getFourth(x,y) {
        var fourth;
        var center = positions.center;

        if (x > center.x && y < center.y) {
            fourth = 1;
        } else if (x > center.x && y > center.y) {
            fourth = 2;
        } else if (x < center.x && y > center.y) {
            fourth = 3;
        } else {
            fourth = 4;
        }

        return fourth;
    }

    /*function ris_point(x,y) {
        rad = positions.R; // радиус окружности
        sm_X = positions.center.x; // смещение центра окружности
        sm_Y = positions.center.y; // смещение центра окружности

        // длина гипотенузы
        var gip = Math.sqrt(Math.pow(y-sm_Y, 2)+Math.pow(x-sm_X, 2));
        var koeff = gip/rad;
        var cycle_x = sm_X+(x-sm_X)/koeff;
        var cycle_y = sm_Y+(y-sm_Y)/koeff;

        //console.log('x='+x+"\n"+'y='+y+"\n"+'gip='+gip+"\n"+'koeff='+koeff+"\n"+'cycle_x=x/koeff='+cycle_x+"\n"+'cycle_y=y/koeff='+cycle_y+"\n");

        document.querySelector('.door-circle__button').style.left = cycle_x - 10 + 'px';
        document.querySelector('.door-circle__button').style.top = cycle_y - 10 + 'px';
    }*/

    /*function getPoint(x,y) {
        var fourth = getFourth(x,y);
        
        console.log(x,y, positions.center);
        
        var x1 = positions.center.x;
        var y1 = positions.center.y;
        
        switch (fourth) {
            case 1:
                /!*var catA = Math.abs(y - positions.center.y);
                
                console.log(catA);*!/

                
                
                break
            case 2:
                break
            case 3:
                break
            case 4:
                break
        }




        /!*var centerX = positions.center.x,
            centerY = positions.center.y,
            R = positions.R;


        var catA = centerY - y,
            catB = centerX - x,
            C = Math.sqrt(Math.pow(catA, 2) + Math.pow(catB, 2));
        /!*var angleA = Math.atan2(y,x)*!/


        var x1 = positions.center.x,
            y1 = positions.center.y,
            x2 = x,
            y2 = y;

        var k = (y2 - y1)/(x2 - x1),
            b = y1 - k * x1;

        var Y = k*x + b

        console.log("x1:" + x1 + " y1:" + y1 + " x2:" + x2 + " y2:" + y2 + ' R: ' + R);*!/



        createSvg(x,y);
        //console.log(Math.atan( (Y * 180) / Math.PI ));

    }*/

    function _onButtonPointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        console.log(e.pageX, e.pageY);

        createPoint(e.pageX, e.pageY);

        //getPoint(e.pageX,e.pageY)

        //ris_point(e.pageX,e.pageY)
    }
    
    function _onButtonPointerMove(e) {
        //console.log(e.target);

        //ris_point(e.pageX,e.pageY)
    }

    area.addEventListener('pointerdown',  _onButtonPointerDown.bind(this));
    area.addEventListener('pointermove',  _onButtonPointerMove.bind(this));
    
    

    /*var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2')
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /!**
     * Проверяем, можно ли теперь открыть дверь
     *!/
    function checkCondition() {
        var isOpened = true;
        buttons.forEach(function(b) {
            if (!b.classList.contains('door-riddle__button_pressed')) {
                isOpened = false;
            }
        });

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }*/
}

// Наследуемся от класса DoorBase
Door0.prototype = Object.create(DoorBase.prototype);
Door0.prototype.constructor = DoorBase;
// END ===================== Пример кода первой двери =======================

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door1(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия второй двери здесь ====
    // Для примера дверь откроется просто по клику на неё
    // 
    //

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2')
    ]

    var buttonV = this.popup.querySelector('.door-riddle__container');

    buttons.forEach(function(b, i) {
        if (i == 0) {
            b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
            b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
            b.addEventListener('pointermove', _onButtonPointerMove.bind(this));
            b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        } else {
            b.addEventListener('pointerdown', _multiTouchPointerDown.bind(this));
            b.addEventListener('pointerup', _multiTouchPointerUp.bind(this));
            b.addEventListener('pointermove', _multiTouchPointerMove.bind(this));
            b.addEventListener('pointerleave', _multiTouchPointerLeave.bind(this));
            b.addEventListener('pointercancel', _multiTouchPointerUp.bind(this));
        }


    }.bind(this));

    var currentPosition = 0,
        startPosition = 0,
        isStarted = false,
        isFinished = false,
        innerWidth = buttons[0].parentElement.getBoundingClientRect().right;

    var multi = [],
        multiCurrentPosition = {},
        multiStartPosition = {},
        positions = {},
        multiIsStarted = false,
        multiIsFinished = false;

    function _multiTouchPointerDown(e) {
        e.target.setPointerCapture(e.pointerId);

        e.target.classList.add('selected');

        multiIsStarted = true;
        positions[e.pointerId] = {};

        positions[e.pointerId].current = positions[e.pointerId].start = e.pageY;
        e.target.classList.add('door-riddle__button_pressed');

    }

    function _multiTouchPointerMove(e) {
        var stopPoint = e.target.parentElement.querySelector('.put').getBoundingClientRect();
        var bPos = e.target.getBoundingClientRect();

        var m = 0;

        positions[e.pointerId].current = e.pageY;

        this.popup.querySelectorAll('.door-riddle__button_multi').forEach(function(el) {
            if (el.classList.contains('selected')) {
                m++;
            }
        })

        this.popup.querySelectorAll('.door-riddle__icon').forEach(function(el) {
            el.classList.add('hidden');
        })

        if (m == 2) {
            if (chekPut(bPos, stopPoint)) {
                e.target.classList.add('door-riddle__button_check');
            } else {
                multiUpdatePosition(e.target, e.pointerId)
            }
        }
    }

    function _multiTouchPointerUp(e) {
        e.target.releasePointerCapture(e.pointerId);
        e.target.classList.remove('door-riddle__button_pressed');
        e.target.classList.remove('selected');


        var allFinish = true;

        this.popup.querySelectorAll('.door-riddle__button_multi').forEach(function(el) {
            if (!el.classList.contains('door-riddle__button_check')) {
                allFinish = false;
            }
        })

        if (!allFinish){
            _multiResetPositions.apply(this);   
        } else {
            multiIsFinished = true;
            checkCondition.apply(this);
        }
    }

    function _multiTouchPointerLeave(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    function _multiResetPositions() {
        positions = {};

        this.popup.querySelectorAll('.door-riddle__button_multi').forEach(function(el) {
            el.classList.remove('door-riddle__button_check');
            el.style.transform = "translateY(" + 0 + "px)";
        })

    }

    function multiUpdatePosition(el, id) {
        requestAnimationFrame(function() {
            var diff = Math.abs(positions[id].current - positions[id].start);
            el.style.transform = "translateY(" + diff + "px)";
        })
    }

    function _onButtonPointerDown(e) {
        isStarted = true;
        currentPosition = startPosition = e.pageX;

        e.target.setPointerCapture(e.pointerId);

        if (!e.target.classList.contains('door-riddle__button_check')) {
            e.target.classList.add('door-riddle__button_pressed');
            this.popup.querySelector('.door-riddle__icon_move-right').classList.remove('hidden');
        }
    }

    function _onButtonPointerUp(e) {
        isStarted = false;
        e.target.classList.remove('door-riddle__button_pressed');
        e.target.releasePointerCapture(e.pointerId);

        if (!isFinished) {
            resetPosition(e.target);
        } else {
            buttonV.classList.remove('hidden');
        }
    }

    function _onButtonPointerMove(e) {
        var stopPoint = e.target.parentElement.querySelector('.put').getBoundingClientRect();
        var bPos = e.target.getBoundingClientRect();

        if (!isStarted && !isFinished) {
            return;
        }

        currentPosition = e.pageX;

        if (!chekPut(bPos, stopPoint)) {
            updatePosition(e.target);
            this.popup.querySelector('.door-riddle__icon_move-right').classList.add('hidden');
        } else {
            isFinished = true;
            e.target.classList.add('door-riddle__button_check');
        }
        
    }

    function chekPut(putPos, elPos) {
        if (elPos.top <= putPos.top && elPos.bottom >= putPos.bottom && elPos.right >= putPos.right && elPos.left <= putPos.left) {
            return true;
        } else {
            return false;
        }
    }

    function checkCondition() {
        var isOpened = true;
        buttons.forEach(function(b) {
            if (!b.classList.contains('door-riddle__button_check')) {
                isOpened = false;
            }
        });

        if (isOpened) {
            this.unlock();
        }
    }

    function updatePosition(el) {
        requestAnimationFrame(function() {
            var diff = currentPosition - startPosition;
            el.style.transform = "translateX(" + diff + "px)";
        })
    }

    function resetPosition(el) {
        requestAnimationFrame(function() {
            el.style.transform = "translateX(" + 0 + "px)";
        })
    }
     
    
    
    // ==== END Напишите свой код для открытия второй двери здесь ====
}
Door1.prototype = Object.create(DoorBase.prototype);
Door1.prototype.constructor = DoorBase;

/**
 * @class Door2
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door2(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [];
    var b = this.popup.querySelectorAll('.door-riddle__button_multi');

    var positions = {},
        wasSelected = [],
        isFinish = false,
        startDragging = false;

    var self = this;

    b.forEach(function(el) {
        buttons.push(el);
    })

    this.popup.querySelector('.start-button').addEventListener('click', function() {
        this.popup.querySelector('.start-button').parentElement.classList.add('hidden');
        this.popup.querySelector('.put').classList.remove('hidden');

        timer.apply(this);
        getRandomButton();
    }.bind(this));


    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointermove', _onButtonPointerMove.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
    }.bind(this));

    var num = 10;

    function timer() {
        var time = document.querySelector('.door-riddle__timer__text');

        time.innerHTML = num;

        var timerId = setTimeout(function tick() {
            if (num >= 0) {
                time.innerHTML = num--;
                timerId = setTimeout(tick, 1000);

            } else {
                clearTimeout(timerId);

                positions = {};
                wasSelected = [];
                isFinish = false;
                startDragging = false;


                buttons.forEach(function(el) {
                    el.classList.remove('finished','door-riddle__button_check','door-riddle__button_selected', 'busy', 'door-riddle__button_pressed')
                    el.style.transform = "translate(0,0)";
                })

                num = 10;
                timer();
                getRandomButton();

            }

        }, 0);

    }

    function getRandomButton() {
        var freeButton = [];
        self.popup.querySelectorAll('.door-riddle__button_multi').forEach(function(el) {
            if (!el.classList.contains('busy')) {
                freeButton.push(el);
            }
        })

        var needRand = [];
        var wasRand;

        if (freeButton.length == 0) return;

        while (needRand.length < 2) {
            var rand = Math.floor(Math.random() * freeButton.length);
            if (needRand.indexOf(rand) == -1) {
                needRand.push(rand);
            }
        }

        needRand.forEach(function(i) {
            freeButton[i].classList.add('door-riddle__button_selected', 'busy');
            wasSelected.push(freeButton[i]);
        })
    }

    function _onButtonPointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        e.target.classList.add('door-riddle__button_pressed');
        e.target.classList.add('draging');

        startDragging = true;

        positions[e.pointerId] = {};

        positions[e.pointerId] = {
            start: {
                x: e.pageX,
                y: e.pageY
            },
            current: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }

    function _onButtonPointerMove(e) {
        var stopPoint = this.popup.querySelector('.put').getBoundingClientRect(),
            buttonPos = e.target.getBoundingClientRect();

        var touchCount = 0;

        
        positions[e.pointerId].current = {    
            x: e.pageX,
            y: e.pageY
        }

        this.popup.querySelectorAll('.door-riddle__button_multi').forEach(function(el) {
            if (el.classList.contains('draging') && el.classList.contains('door-riddle__button_selected')) {
                touchCount++;
            }
        })

        if (touchCount == 2 && startDragging) {
            if (chekPut(buttonPos, stopPoint)) {
                isFinish = true;
                e.target.classList.add('door-riddle__button_check', 'finished');
            } else {
                updatePosition(e.target, e.pointerId)
            }
        }
    }

    function _onButtonPointerUp(e) {
        e.target.releasePointerCapture(e.pointerId);
        e.target.classList.remove('door-riddle__button_pressed');
        startDragging = false;

        var allFinish = true;

        this.popup.querySelectorAll('.door-riddle__button.draging').forEach(function(el) {
            if (!el.classList.contains('finished')) {
                allFinish = false;
            }
        })

        if (!allFinish) {
            positions = {};
            resetPositions.apply(this);
        } else {
            isFinish = true;
            checkCompleteButtons.apply(this);
        }
    }


    function checkCompleteButtons() {
        var finishedLength = this.popup.querySelectorAll('.door-riddle__button_check.finished').length,
            wasSelectedLength = wasSelected.length;

        if (wasSelectedLength === finishedLength && finishedLength === buttons.length) {
            this.unlock();
        } else if (wasSelectedLength === finishedLength) {
            isFinish = true;
            startDragging = false;

            buttons.forEach(function(el) {
                el.classList.remove('draging');
            })

            getRandomButton.apply(this);
        }
    }

    function updatePosition(el, id) {
        requestAnimationFrame(function() {
            var diffX = positions[id].current.x - positions[id].start.x,
                diffY = positions[id].current.y - positions[id].start.y;
            el.style.transform = "translate(" + diffX + "px,"+ diffY + "px)";
        })
    }

    function resetPositions() {
        positions = {};

        this.popup.querySelectorAll('.door-riddle__button.draging').forEach(function(el) {
            el.classList.remove('draging');
            el.classList.remove('door-riddle__button_check');
            el.classList.remove('door-riddle__button_pressed');
            el.style.transform = "translate(0,0)";
        })
    }

    function chekPut(putPos, elPos) {
        if (elPos.top <= putPos.top && elPos.bottom >= putPos.bottom && elPos.right >= putPos.right && elPos.left <= putPos.left) {
            return true;
        } else {
            return false;
        }
    }


    // ==== Напишите свой код для открытия третей двери здесь ====
    
    // ==== END Напишите свой код для открытия третей двери здесь ====
}
Door2.prototype = Object.create(DoorBase.prototype);
Door2.prototype.constructor = DoorBase;

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Box(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия сундука здесь ====
    // Для примера сундук откроется просто по клику на него
    var self = this;
    
    var currentAngle = 45;
    var fullCircleCount = 0;

    var target = document.getElementById('interaction');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', function(e) {
        var rotatable = document.getElementById('rotatable');
        currentAngle += e.detail.distanceFromLast;
        rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

        if (Math.floor(e.detail.distanceFromOrigin) / 360) {
            fullCircleCount = parseInt(Math.floor(e.detail.distanceFromOrigin) / 360);
        }
        

        if (fullCircleCount <= 6) {
            self.popup.querySelector('.boom__inner').style.borderWidth = fullCircleCount * 20 + "px";
        } else {
            self.unlock();
        }


    });

    // ==== END Напишите свой код для открытия сундука здесь ====

    this.showCongratulations = function() {
        alert('Поздравляю! Игра пройдена!');
    };
}
Box.prototype = Object.create(DoorBase.prototype);
Box.prototype.constructor = DoorBase;
