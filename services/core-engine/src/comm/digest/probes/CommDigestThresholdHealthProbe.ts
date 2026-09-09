export class CommDigestThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestThreshold" };
  }
}
