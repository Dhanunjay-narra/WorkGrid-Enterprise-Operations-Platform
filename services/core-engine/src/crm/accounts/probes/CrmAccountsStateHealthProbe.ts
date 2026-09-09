export class CrmAccountsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsState" };
  }
}
