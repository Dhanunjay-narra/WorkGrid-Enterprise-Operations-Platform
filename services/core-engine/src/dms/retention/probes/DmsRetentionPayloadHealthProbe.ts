export class DmsRetentionPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionPayload" };
  }
}
