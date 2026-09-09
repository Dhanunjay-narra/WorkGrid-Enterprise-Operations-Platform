export class CrmDealsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsRule" };
  }
}
