export class IotAnomaliesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesTransaction" };
  }
}
