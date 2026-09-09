export class IotFirmwareNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareNode" };
  }
}
