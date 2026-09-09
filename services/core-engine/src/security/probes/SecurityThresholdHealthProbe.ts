export class SecurityThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityThreshold" };
  }
}
