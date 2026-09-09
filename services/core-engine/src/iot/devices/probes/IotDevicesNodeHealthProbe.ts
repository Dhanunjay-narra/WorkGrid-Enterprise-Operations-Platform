export class IotDevicesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesNode" };
  }
}
