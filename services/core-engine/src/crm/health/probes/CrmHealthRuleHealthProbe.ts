export class CrmHealthRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthRule" };
  }
}
