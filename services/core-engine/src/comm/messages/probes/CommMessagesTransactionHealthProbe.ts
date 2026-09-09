export class CommMessagesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesTransaction" };
  }
}
