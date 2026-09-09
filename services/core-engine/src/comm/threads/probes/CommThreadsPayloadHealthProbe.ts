export class CommThreadsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsPayload" };
  }
}
