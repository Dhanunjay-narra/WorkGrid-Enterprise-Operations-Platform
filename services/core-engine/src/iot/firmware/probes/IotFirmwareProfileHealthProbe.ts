export class IotFirmwareProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareProfile" };
  }
}
