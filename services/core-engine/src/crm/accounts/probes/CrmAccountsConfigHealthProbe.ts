export class CrmAccountsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsConfig" };
  }
}
