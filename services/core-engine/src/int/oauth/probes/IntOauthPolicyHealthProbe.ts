export class IntOauthPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthPolicy" };
  }
}
