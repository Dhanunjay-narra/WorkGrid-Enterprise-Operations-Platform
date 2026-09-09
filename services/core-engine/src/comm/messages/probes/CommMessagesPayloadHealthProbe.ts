export class CommMessagesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesPayload" };
  }
}
