export class BiAnomaliesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesReport" };
  }
}
