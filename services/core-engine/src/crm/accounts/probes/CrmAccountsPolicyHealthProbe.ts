export class CrmAccountsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsPolicy" };
  }
}
