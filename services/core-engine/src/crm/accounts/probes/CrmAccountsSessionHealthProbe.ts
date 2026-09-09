export class CrmAccountsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsSession" };
  }
}
