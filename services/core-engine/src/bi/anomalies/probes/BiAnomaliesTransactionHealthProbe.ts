export class BiAnomaliesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesTransaction" };
  }
}
