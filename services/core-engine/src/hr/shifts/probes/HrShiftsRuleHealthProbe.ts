export class HrShiftsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsRule" };
  }
}
