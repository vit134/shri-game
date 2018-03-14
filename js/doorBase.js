/**
 * Базовый класс всех дверей
 * @class DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function DoorBase(number, onUnlock) {
    this.number = number;
    this.onUnclockCallback = onUnlock;

    this.level = document.querySelector('.level_' + number);
    this.door = document.querySelector('.door_level_' + number);
    this.next = document.querySelector('.popup__congratulations__button');
    this.popup = document.querySelector('.popup_level_' + number);
    this.close = this.popup.querySelector('.popup__close');

    this.isLocked = true;
    this.isDisabled = this.door.classList.contains('door_disabled');

    this.timer = 0;
    this.timerId;

    this.door.addEventListener('click', onDoorClick.bind(this));
    this.close.addEventListener('click', onCloseClick.bind(this));

    function onDoorClick() {
        if (!this.isDisabled) {
            this.openPopup();
            this.startTimer.apply(this);
        }
    }

    function onCloseClick() {
        this.closePopup();
    }

}

DoorBase.prototype = {
    openPopup: function() {
        this.popup.classList.remove('popup_hidden');
    },
    closePopup: function() {
        this.popup.classList.add('popup_hidden');
    },
    enable: function() {
        this.door.classList.remove('door_disabled');
        this.isDisabled = false;
    },
    /**
     * Вызывается, если после последовательности действий
     * дверь считается открытой
     */
    unlock: function() {
        this.door.classList.remove('door_locked');
        this.isLocked = false;

        this.showCongratulations();

        this.closePopup();
        this.onUnclockCallback();
    },
    showCongratulations: function() {
        //alert('Дверь ' + this.number + ' открыта!')

        this.popup.querySelector('.popup__congratulations_' + this.number).classList.remove('popup_hidden');
        this.popup.querySelector('.popup__congratulations__total-time').innerHTML = Math.floor(this.timer / 60) + ' : ' + parseInt(this.timer % 60)
        this.stopTimer()
        //console.log(this.timer);
    },
    startTimer: function() {
        var time = new Date();

        this.timerId = setInterval(function () {
            //console.log(this);
            this.timer = (new Date() - time) / 1000;
        }.bind(this), 1000)

        console.log('start', this.timerId);
    },
    stopTimer: function() {
        clearTimeout(this.timerId)
        //console.log(Math.floor(this.timer / 60) + ': ' + parseInt(this.timer % 60));
    }
};
