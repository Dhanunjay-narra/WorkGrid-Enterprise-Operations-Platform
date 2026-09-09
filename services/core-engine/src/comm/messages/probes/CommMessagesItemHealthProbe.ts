export class CommMessagesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesItem" };
  }
}
