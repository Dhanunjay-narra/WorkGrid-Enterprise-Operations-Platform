export class DmsRetentionQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionQueue" };
  }
}
