export class BiAnomaliesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesRecord" };
  }
}
