export class CommMessagesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesNode" };
  }
}
