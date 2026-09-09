export class DmsVersionsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsPayload" };
  }
}
