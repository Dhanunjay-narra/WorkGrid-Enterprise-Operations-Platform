export class IntOauthStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthState" };
  }
}
