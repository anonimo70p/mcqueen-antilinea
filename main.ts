maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        basic.pause(250)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        basic.pause(250)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    }
})
