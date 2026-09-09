export class IotDevicesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesState" };
  }
}
