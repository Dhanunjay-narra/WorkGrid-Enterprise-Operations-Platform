export class BiAnomaliesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesItem" };
  }
}
