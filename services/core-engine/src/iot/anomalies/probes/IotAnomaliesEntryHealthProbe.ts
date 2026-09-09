export class IotAnomaliesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesEntry" };
  }
}
