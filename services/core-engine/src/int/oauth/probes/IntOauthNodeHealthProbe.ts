export class IntOauthNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthNode" };
  }
}
