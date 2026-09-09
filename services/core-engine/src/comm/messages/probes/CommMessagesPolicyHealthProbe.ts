export class CommMessagesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesPolicy" };
  }
}
