export class IotFirmwareEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareEntry" };
  }
}
