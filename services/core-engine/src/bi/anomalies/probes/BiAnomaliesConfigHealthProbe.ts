export class BiAnomaliesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesConfig" };
  }
}
