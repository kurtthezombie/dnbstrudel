// ATL HH - Migos-inspired Atlanta trap / 144 BPM, half-time feel / F minor.
// Paste into the Strudel REPL and play. One cycle = one 4/4 bar.
// Original two-bar hook over a four-bar groove, with room for triplet vocals.
// Drum bars below have four beat groups; [hh hh hh] fills one beat.

setcpm(144 / 4)

stack(
  // Syncopated kick and sub attacks lock together; bar four answers in triplets.
  s(`
    <
      [[bd ~ ~ ~] [~ ~ bd ~] [~ ~ ~ bd] [~ ~ bd ~]]
      [[bd ~ ~ bd] ~ [~ ~ bd ~] [~ bd ~ ~]]
      [[bd ~ ~ ~] [~ ~ bd ~] [~ ~ ~ bd] [~ ~ bd ~]]
      [[bd ~ ~ ~] [~ bd ~ ~] ~ [~ bd bd]]
    >
  `)
    .bank("RolandTR808")
    .attack(0.001)
    .decay(0.12)
    .sustain(0)
    .release(0.025)
    .lpf(2200)
    .gain(0.7),

  // Clap and snare land together on beat three.
  s("~ ~ cp ~")
    .bank("RolandTR808")
    .hpf(700)
    .room(0.06)
    .gain(0.48)
    .orbit(1),

  s("~ ~ sd ~")
    .bank("RolandTR808")
    .lpf(4200)
    .gain(0.24),

  // Straight eighths anchor the pocket; full-beat triplets punctuate the flow.
  // The last beat of bar four doubles into a six-hit triplet roll.
  s(`
    <
      [[hh hh] [hh hh] [hh hh] [hh hh hh]]
      [[hh hh] [hh hh hh] [hh hh] [hh ~]]
      [[hh hh] [hh hh] [hh hh] [hh hh hh]]
      [[hh hh] [hh hh hh] [hh ~] [hh hh hh hh hh hh]]
    >
  `)
    .bank("RolandTR808")
    .gain("[0.22 0.12] [0.18 0.11] [0.21 0.12] [0.18 0.12 0.1]")
    .hpf(6500)
    .pan("0.46 0.54"),

  s("< [~ ~ ~ oh ~ ~ ~ ~] [~ ~ ~ ~ ~ ~ ~ oh] >")
    .bank("RolandTR808")
    .clip(0.35)
    .hpf(5000)
    .gain(0.18),

  // A quiet snare answer every eight bars, between the main clap hits.
  s("<~ ~ ~ ~ ~ ~ ~ [~ ~ [~ sd sd] ~]>")
    .bank("RolandTR808")
    .gain(0.14)
    .lpf(3200),

  // Each bass bar has 16 units. Short gaps make the long 808 notes bounce.
  // The final four units split into a rest and two triplet pickup notes.
  note(`
    <
      [f1@6 f1@3 ~@2 c2@2 ~ f1@2]
      [f1@3 f1@5 ~@2 eb1@3 f1@3]
      [db1@6 db1@3 ~@2 ab1@2 ~ db1@2]
      [eb1@5 eb1@3 ~@4 [~ eb2 eb1]@4]
    >
  `)
    .s("sine")
    .attack(0.005)
    .decay(0.5)
    .sustain(0.7)
    .release(0.035)
    .clip(0.9)
    .penv(12)
    .pdecay(0.045)
    .distort(0.5)
    .lpf(650)
    .gain(0.52),

  // Three-note pluck hook: repeat the phrase and leave the spaces for a rapper.
  note("<[[f5 ~ ~ c5] ~ [ab4 ~] ~] [[f5 ~ ~ c5] ~ ~ [~ ab4 ~]]>")
    .s("triangle")
    .fm(1.2)
    .fmh(2)
    .attack(0.002)
    .decay(0.14)
    .sustain(0)
    .release(0.08)
    .gain(0.18)
    .delay(0.12)
    .delaytime(0.3125)
    .delayfeedback(0.18)
    .room(0.22)
    .orbit(2),

  // Occasional low stabs add menace without filling every bar.
  note("<[~ ~ ~ [f3,ab3,c4]] ~ [~ ~ ~ [db3,f3,ab3]] ~>")
    .s("sawtooth")
    .attack(0.005)
    .decay(0.18)
    .sustain(0)
    .release(0.08)
    .lpf(1100)
    .hpf(250)
    .gain(0.045)
    .room(0.16)
    .orbit(3)
)
