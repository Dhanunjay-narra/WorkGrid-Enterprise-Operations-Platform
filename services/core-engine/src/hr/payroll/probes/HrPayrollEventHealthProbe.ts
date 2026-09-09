export class HrPayrollEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollEvent" };
  }
}
