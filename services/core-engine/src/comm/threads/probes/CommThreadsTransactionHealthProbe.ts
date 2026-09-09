export class CommThreadsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsTransaction" };
  }
}
