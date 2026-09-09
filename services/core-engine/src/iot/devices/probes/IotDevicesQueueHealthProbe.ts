export class IotDevicesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesQueue" };
  }
}
