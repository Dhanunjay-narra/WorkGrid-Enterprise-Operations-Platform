export class TelemetryAnomalyEngine {
  public detectZScoreAnomalies(values: number[], thresholdZ: number = 3.0): { index: number; value: number; zScore: number }[] {
    if (values.length < 4) return [];

    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);

    if (stdDev === 0) return [];

    const anomalies: { index: number; value: number; zScore: number }[] = [];
    values.forEach((val, idx) => {
      const zScore = Math.abs((val - mean) / stdDev);
      if (zScore >= thresholdZ) {
        anomalies.push({ index: idx, value: val, zScore });
      }
    });

    return anomalies;
  }
}
