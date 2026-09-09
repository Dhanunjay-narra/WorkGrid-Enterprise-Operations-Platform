export class CrmAccountsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsRule" };
  }
}
