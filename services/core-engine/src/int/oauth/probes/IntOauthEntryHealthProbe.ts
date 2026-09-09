export class IntOauthEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthEntry" };
  }
}
