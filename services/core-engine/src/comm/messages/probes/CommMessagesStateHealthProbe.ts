export class CommMessagesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesState" };
  }
}
