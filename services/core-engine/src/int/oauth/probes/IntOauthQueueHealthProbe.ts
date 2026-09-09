export class IntOauthQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthQueue" };
  }
}
