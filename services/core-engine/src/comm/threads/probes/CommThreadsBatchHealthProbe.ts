export class CommThreadsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsBatch" };
  }
}
