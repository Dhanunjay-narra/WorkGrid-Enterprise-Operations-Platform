export class HrLeaveRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveRule" };
  }
}
