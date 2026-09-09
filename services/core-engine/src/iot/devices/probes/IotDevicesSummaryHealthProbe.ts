export class IotDevicesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesSummary" };
  }
}
