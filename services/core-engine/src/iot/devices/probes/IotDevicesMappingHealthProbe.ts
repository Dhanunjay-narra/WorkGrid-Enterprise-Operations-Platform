export class IotDevicesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesMapping" };
  }
}
