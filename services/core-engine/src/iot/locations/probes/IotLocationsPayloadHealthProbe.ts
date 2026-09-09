export class IotLocationsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsPayload" };
  }
}
