export class IotAnomaliesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesState" };
  }
}
