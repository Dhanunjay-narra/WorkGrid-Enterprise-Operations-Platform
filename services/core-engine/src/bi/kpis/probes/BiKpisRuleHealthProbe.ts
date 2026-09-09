export class BiKpisRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisRule" };
  }
}
