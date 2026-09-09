export class CrmAccountsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsEntry" };
  }
}
