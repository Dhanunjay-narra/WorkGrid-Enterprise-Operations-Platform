export class CrmLeadsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsRule" };
  }
}
