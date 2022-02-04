let pot_position = 0
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
basic.forever(function () {
    pot_position = pins.analogReadPin(AnalogPin.P1)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, pins.map(
    pot_position,
    0,
    1023,
    0,
    180
    ))
})
