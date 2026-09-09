export class IdentityThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityThreshold" };
  }
}
