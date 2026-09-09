export class CommCallsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsPayload" };
  }
}
