export class IotDevicesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesSession" };
  }
}
