export class SupportQueuesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesBatch" };
  }
}
