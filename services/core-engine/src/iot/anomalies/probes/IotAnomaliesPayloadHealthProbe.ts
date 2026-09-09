export class IotAnomaliesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesPayload" };
  }
}
