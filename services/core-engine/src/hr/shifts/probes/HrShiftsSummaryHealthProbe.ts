export class HrShiftsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsSummary" };
  }
}
