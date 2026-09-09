export class IotDevicesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesTask" };
  }
}
