export class RbacThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacThreshold" };
  }
}
