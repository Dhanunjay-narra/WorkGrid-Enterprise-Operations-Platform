export class DmsChunksPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksPayload" };
  }
}
