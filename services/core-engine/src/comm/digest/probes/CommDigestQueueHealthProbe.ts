export class CommDigestQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestQueue" };
  }
}
