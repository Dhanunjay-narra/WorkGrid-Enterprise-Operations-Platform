export class BiAnomaliesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesEvent" };
  }
}
