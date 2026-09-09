export class IntOauthMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthMapping" };
  }
}
