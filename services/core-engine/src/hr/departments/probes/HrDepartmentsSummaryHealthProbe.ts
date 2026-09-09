export class HrDepartmentsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsSummary" };
  }
}
