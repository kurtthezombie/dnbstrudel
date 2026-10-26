
setcpm(140/4)

stack(
  // SPARSE KICK
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(1100)
    ._punchcard(),

  // HALF-TIME SNARE
  s("~ ~ sd ~")
    .bank("RolandTR909")
    .gain(0.65)
    .room(0.25)
    ._punchcard(),

  // QUIET SHUFFLING HATS
  s("~ hh ~ [hh ~] ~ hh [~ hh] ~")
    .bank("RolandTR808")
    .gain(0.16)
    .hpf(5000)
    ._punchcard(),

  // DEEP SUB BASS
  note("f1@3 ~ eb1 ~ f1@2 ~ c2")
    .s("sine")
    .attack(0.01)
    .release(0.15)
    .lpf(120)
    .gain(0.8)
    ._punchcard(),

  // DARK, SLOW WOBBLE
  note("f2 ~ ~ f2 ~ eb2 ~ ~")
    .s("sawtooth")
    .lpf(450)
    .lfo({control:"lpf", sync:"<2 4 2 8>"})
    .lpq(4)
    .gain(0.25)
    ._punchcard(),

  // ATMOSPHERIC DRONE
  note("<f3 eb3>")
    .s("triangle")
    .slow(4)
    .attack(1)
    .release(2)
    .lpf(350)
    .room(0.75)
    .gain(0.12),

note("<[c4*4] [c4 c4 c4 [[d4 c#4]]] [b3*4] [b3*4]>")
  .s("gm_pizzicato_strings")
  .transpose(-24)
  .gain(1)
  ._punchcard({ cycles: 4, labels: true }),
// DARK CHOIR — HARMONIZED WITH PIZZICATO
note("<~ [~ ~ ~ [c5,eb5,g5]] ~ [~ ~ ~ [b4,d5,f5]]>")
  .s("gm_choir_aahs")
  .attack(0.6)
  .release(3)
  .gain(0.25)
  .room(0.85)
  .delay(0.3)
  .lpf(1800)
  ._punchcard({ cycles: 4, labels: true })
)
