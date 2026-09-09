export class DmsVersionsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsThreshold" };
  }
}
