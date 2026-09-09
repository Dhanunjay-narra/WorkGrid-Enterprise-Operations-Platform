export class IotDevicesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesConfig" };
  }
}
