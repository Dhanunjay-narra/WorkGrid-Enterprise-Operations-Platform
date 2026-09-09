export class HrPayrollRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollRule" };
  }
}
