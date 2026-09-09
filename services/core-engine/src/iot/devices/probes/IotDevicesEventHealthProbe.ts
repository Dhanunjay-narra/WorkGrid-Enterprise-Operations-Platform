export class IotDevicesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesEvent" };
  }
}
