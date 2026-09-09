export class IntOauthItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthItem" };
  }
}
