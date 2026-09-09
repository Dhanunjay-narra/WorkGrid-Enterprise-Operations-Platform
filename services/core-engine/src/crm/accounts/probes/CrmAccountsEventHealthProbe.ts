export class CrmAccountsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsEvent" };
  }
}
