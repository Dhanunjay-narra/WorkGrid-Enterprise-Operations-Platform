export class CommMessagesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesSession" };
  }
}
