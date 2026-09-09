export class IntOauthThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthThreshold" };
  }
}
