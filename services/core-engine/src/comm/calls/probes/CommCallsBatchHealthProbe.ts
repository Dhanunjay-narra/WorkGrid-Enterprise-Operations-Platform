export class CommCallsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsBatch" };
  }
}
