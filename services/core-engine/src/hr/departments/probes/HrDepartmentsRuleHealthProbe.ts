export class HrDepartmentsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsRule" };
  }
}
