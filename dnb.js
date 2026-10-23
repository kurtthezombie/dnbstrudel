
samples('shabda/speech/en-US/f:ai,disconnect,error')

setcpm(174/4)

stack(
  // KICK
  s("bd bd ~ ~ ~ bd ~ ~")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(1800),

  // MAIN SNARE
  s("~ sd ~ sd")
    .bank("RolandTR909")
    .gain(0.68)
    .room(0.25),

  // HI-HATS
  s("hh*8")
    .bank("RolandTR909")
    .gain("0.25 0.14 0.22 0.12 0.26 0.13 0.2 0.12")
    .hpf(5500),

  // GHOST ROLL
  s("~ [~ sd sd] ~ [sd sd sd sd]")
    .bank("RolandTR909")
    .gain("0.13 0.1 0.14 0.09")
    .lpf(1900)
    .room(0.12),

  // SHAKER
  s("~ hh ~ hh ~ hh ~ hh")
    .bank("RolandTR808")
    .gain(0.11)
    .hpf(6500),

  // SYNTH STRINGS — 8 BARS
  note("<[d3@8 g3@4 f3@4] [d3@8 a3@4 c4@2 d4@2]>/4")
    .s("gm_synth_strings_1")
    .transpose(-12)
    .legato(1)
    .lpf(650)
    .gain(0.65)
    .room(0.2),

  // FEMALE VOCALS — 8 BARS
  s("[~ ai ~ ~ disconnect ~ error ~]/8")
    .gain(0.28)
    .room(0.85)
    .delay(0.4)
    .lpf(3000)
    .speed(0.9),

   
  // LIQUID DNB MELODIC PIANO — 8 BARS
  note("[~ [a4 c5] ~ e5 ~ [g4 a4] ~ d5 ~ ~ [c5 e5] ~ g4 ~ [a4 g4] ~]/8")
    .s("gm_epiano1")
    .clip(0.85)
    .attack(0.01)
    .release(0.4)
    .gain(0.55)
    .room(0.65)
    .delay(0.25)
    .lpf(4200)


)
.punchcard()
