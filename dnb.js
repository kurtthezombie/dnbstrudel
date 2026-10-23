
samples('shabda/speech/en-US/f:warning,disconnect,error')

setcpm(174/4)

stack(
  // KICK
  s("bd bd ~ ~ ~ bd ~ ~")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(1800)
    ._punchcard({ cycles: 2, labels: true }),

  // MAIN SNARE
  s("~ sd ~ sd")
    .bank("RolandTR909")
    .gain(0.68)
    .room(0.25)
    ._punchcard({ cycles: 2, labels: true }),

  // HI-HATS
  s("hh*8")
    .bank("RolandTR909")
    .gain("0.25 0.14 0.22 0.12 0.26 0.13 0.2 0.12")
    .hpf(5500)
    ._punchcard({ cycles: 2, labels: true }),

  // GHOST ROLL
  s("~ [~ sd sd] ~ [sd sd sd sd]")
    .bank("RolandTR909")
    .gain("0.13 0.1 0.14 0.09")
    .lpf(1900)
    .room(0.12)
    ._punchcard({ cycles: 2, labels: true }),

  // SHAKER
  s("~ hh ~ hh ~ hh ~ hh")
    .bank("RolandTR808")
    .gain(0.11)
    .hpf(6500)
    ._punchcard({ cycles: 2, labels: true }),

  // SYNTH STRINGS
  note("<[d3@8 g3@4 f3@4] [d3@8 a3@4 c4@2 d4@2]>/4")
    .s("gm_synth_strings_1")
    .transpose(-12)
    .legato(1)
    .lpf(650)
    .gain(0.65)
    .room(0.2)
    ._punchcard({ cycles: 8, labels: true }),

  // FEMALE VOCALS
  s("[~ warning ~ ~ disconnect ~ error ~]/8")
    .gain(0.28)
    .room(0.85)
    .delay(0.4)
    .lpf(3000)
    .speed(0.9)
    ._punchcard({ cycles: 8, labels: true }),

  // LIQUID DNB PIANO
  note("[~ [a4 c5] ~ e5 ~ [g4 a4] ~ d5 ~ ~ [c5 e5] ~ g4 ~ [a4 g4] ~]/8")
    .s("gm_epiano1")
    .clip(0.85)
    .attack(0.01)
    .release(0.4)
    .gain(0.55)
    .room(0.65)
    .delay(0.25)
    .lpf(4200)
    ._punchcard({ cycles: 8, labels: true }),

  // CHOIR
  note("<[a2@8 bb2@4 a2@4] [a2@8 f2@4 e2@2 f2@2]>/4")
    .s("gm_choir_aahs")
    .gain(0.45)
    ._punchcard({ cycles: 8, labels: true })
)
