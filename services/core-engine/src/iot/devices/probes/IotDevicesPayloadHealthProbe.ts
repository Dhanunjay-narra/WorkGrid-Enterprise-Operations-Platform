export class IotDevicesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesPayload" };
  }
}
