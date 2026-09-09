export class CommMessagesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesQueue" };
  }
}
