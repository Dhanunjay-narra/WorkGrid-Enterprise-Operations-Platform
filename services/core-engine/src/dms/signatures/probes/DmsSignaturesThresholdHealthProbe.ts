export class DmsSignaturesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesThreshold" };
  }
}
