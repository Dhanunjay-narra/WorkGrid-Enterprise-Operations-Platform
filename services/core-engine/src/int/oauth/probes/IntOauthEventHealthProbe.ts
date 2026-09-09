export class IntOauthEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthEvent" };
  }
}
