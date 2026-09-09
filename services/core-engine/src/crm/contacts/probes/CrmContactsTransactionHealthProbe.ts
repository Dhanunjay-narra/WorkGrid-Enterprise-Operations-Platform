export class CrmContactsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsTransaction" };
  }
}
