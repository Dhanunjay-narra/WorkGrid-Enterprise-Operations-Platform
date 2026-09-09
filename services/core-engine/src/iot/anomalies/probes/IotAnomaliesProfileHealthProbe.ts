export class IotAnomaliesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesProfile" };
  }
}
