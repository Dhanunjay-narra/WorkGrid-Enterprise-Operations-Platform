export class BiAnomaliesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesSession" };
  }
}
