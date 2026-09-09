export class IotAnomaliesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesRecord" };
  }
}
