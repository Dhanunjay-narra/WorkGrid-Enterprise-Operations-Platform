export class IotThresholdsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsPayload" };
  }
}
