export class CommMessagesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesBatch" };
  }
}
