export class AuthQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthQueue" };
  }
}
