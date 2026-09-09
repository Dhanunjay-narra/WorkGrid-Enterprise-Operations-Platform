export class CrmAccountsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsQueue" };
  }
}
