export class HrShiftsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsReport" };
  }
}
