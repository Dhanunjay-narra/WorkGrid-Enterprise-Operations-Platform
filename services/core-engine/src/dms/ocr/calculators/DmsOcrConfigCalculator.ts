export class DmsOcrConfigCalculator {
  public static computeMetricVariance(target: number, actual: number): { variance: number; variancePercent: number; isWithinSla: boolean } {
    const variance = actual - target;
    const variancePercent = target > 0 ? (variance / target) * 100 : 0;
    const isWithinSla = Math.abs(variancePercent) <= 5.0;
    return { variance, variancePercent, isWithinSla };
  }
}
