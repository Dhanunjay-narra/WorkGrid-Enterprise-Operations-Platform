export class CrmAccountsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsProfile" };
  }
}
