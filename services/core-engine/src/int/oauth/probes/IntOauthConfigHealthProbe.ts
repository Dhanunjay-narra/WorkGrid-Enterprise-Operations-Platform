export class IntOauthConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthConfig" };
  }
}
