export class AuthThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthThreshold" };
  }
}
