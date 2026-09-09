export class CommMessagesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesEvent" };
  }
}
