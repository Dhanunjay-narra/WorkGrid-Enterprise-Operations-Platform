export class RbacRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacRule" };
  }
}
