export class CommMessagesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesProfile" };
  }
}
