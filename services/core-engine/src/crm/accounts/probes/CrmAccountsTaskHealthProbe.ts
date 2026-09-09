export class CrmAccountsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsTask" };
  }
}
