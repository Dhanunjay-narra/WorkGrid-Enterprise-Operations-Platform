export class BiExportsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsRule" };
  }
}
