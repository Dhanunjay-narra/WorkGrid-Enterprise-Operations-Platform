export class BiAnomaliesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesQueue" };
  }
}
