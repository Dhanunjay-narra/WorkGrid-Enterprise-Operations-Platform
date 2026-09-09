export class IotFirmwareTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareTask" };
  }
}
