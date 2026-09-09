export class BiAnomaliesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesNode" };
  }
}
