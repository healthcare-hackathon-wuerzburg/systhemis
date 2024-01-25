export type SymptomsEntry = {
  pain: {
    headPain: number,
    nosePain: number,
    mouthPain: number,
    throatPain: number,
    neckPain: number
  },
  swallow: {
    swallowPain: number;
    mouthDrynres: number;
    smellTastingIssues: number;
    swallowingFood: number;
    swallowingDrinks: number;
    swallowUp: number;
    feedingTube: number;
  },
  breath: {
    breathlessnessCalm: number;
    breathlessnessActivity: number;
    coughing: number;
    hoarseness: number;
  },
  bleeding: {
    bleedNose: number;
    bleedMouth: number;
    bleedThroat: number;
    bleedDeep: number;
  },
}
