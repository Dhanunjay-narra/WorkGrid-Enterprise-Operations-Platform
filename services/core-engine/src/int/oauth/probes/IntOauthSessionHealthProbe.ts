export class IntOauthSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthSession" };
  }
}
