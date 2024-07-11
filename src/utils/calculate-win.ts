import { EVariant } from "@/model/variant";

export const calculateWin = (
  bet: number,
  win: number,
  variant: EVariant,
  specificNumber?: number
) => {
  const standartWinWariant = bet * 2,
    loose = bet * -1;

  switch (variant) {
    case EVariant.even:
      if (win % 2) return loose;
      else return standartWinWariant;
    case EVariant.odd:
      if (!(win % 2)) return loose;
      else return standartWinWariant;
    case EVariant.range1to3:
      if (win > 3) return loose;
      else return standartWinWariant;
    case EVariant.range4to6:
      if (win < 4) return loose;
      else return standartWinWariant;
    case EVariant.specificNumber:
      if (win !== specificNumber) return loose;
      else return standartWinWariant + bet;
    default:
      return 0;
  }
};
