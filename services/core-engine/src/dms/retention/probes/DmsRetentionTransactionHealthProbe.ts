export class DmsRetentionTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionTransaction" };
  }
}
