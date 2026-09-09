export class CommDigestPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestPayload" };
  }
}
