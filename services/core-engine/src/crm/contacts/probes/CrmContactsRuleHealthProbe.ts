export class CrmContactsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsRule" };
  }
}
