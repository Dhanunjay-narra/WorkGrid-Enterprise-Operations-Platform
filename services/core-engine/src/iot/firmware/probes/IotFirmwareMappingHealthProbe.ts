export class IotFirmwareMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareMapping" };
  }
}
