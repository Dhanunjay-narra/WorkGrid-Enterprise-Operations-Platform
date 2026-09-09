export class TenancyTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyTransaction" };
  }
}
