export class IntOauthProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthProfile" };
  }
}
