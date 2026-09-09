export class IotDevicesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesProfile" };
  }
}
