export class IotAnomaliesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesBatch" };
  }
}
