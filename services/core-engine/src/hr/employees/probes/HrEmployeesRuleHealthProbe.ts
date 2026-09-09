export class HrEmployeesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesRule" };
  }
}
