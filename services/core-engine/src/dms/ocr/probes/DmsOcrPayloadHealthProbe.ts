export class DmsOcrPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrPayload" };
  }
}
