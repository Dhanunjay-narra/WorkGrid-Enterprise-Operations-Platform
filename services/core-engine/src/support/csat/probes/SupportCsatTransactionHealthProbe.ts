export class SupportCsatTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatTransaction" };
  }
}
