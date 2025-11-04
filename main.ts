while (maqueen.Ultrasonic() > 5) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
maqueen.motorStop(maqueen.Motors.All)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
while (maqueen.Ultrasonic() > 5) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
maqueen.motorStop(maqueen.Motors.All)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
basic.pause(1000)
while (maqueen.Ultrasonic() > 5) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
