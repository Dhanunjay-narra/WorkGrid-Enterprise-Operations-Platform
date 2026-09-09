export class IotAnomaliesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesMapping" };
  }
}
