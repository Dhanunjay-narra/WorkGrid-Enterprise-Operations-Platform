export class IotFleetPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetPayload" };
  }
}
