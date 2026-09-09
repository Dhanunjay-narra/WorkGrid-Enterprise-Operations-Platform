export class IotAnomaliesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesNode" };
  }
}
