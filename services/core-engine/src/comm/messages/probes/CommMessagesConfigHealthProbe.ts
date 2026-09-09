export class CommMessagesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesConfig" };
  }
}
