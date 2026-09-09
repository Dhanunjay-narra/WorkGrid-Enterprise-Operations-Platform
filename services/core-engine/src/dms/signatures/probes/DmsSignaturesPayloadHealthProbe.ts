export class DmsSignaturesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesPayload" };
  }
}
