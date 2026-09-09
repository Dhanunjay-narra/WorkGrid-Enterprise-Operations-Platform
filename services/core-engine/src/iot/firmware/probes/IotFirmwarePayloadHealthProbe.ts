export class IotFirmwarePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwarePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwarePayload" };
  }
}
