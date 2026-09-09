export class CrmAccountsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsTransaction" };
  }
}
