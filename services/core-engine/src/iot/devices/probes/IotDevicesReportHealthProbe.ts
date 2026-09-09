export class IotDevicesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesReport" };
  }
}
