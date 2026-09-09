export class IotDevicesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesItem" };
  }
}
