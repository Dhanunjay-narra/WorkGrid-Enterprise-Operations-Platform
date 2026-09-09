export class DmsOcrThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrThreshold" };
  }
}
