export class BiExportsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsThreshold" };
  }
}
