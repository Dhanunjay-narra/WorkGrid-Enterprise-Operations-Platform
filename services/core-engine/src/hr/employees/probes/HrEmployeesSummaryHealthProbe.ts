export class HrEmployeesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesSummary" };
  }
}
