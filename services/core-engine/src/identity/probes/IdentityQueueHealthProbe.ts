export class IdentityQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityQueue" };
  }
}
