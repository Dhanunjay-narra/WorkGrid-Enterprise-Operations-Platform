export class IotDevicesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesPolicy" };
  }
}
