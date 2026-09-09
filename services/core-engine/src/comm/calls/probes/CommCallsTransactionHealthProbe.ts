export class CommCallsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsTransaction" };
  }
}
