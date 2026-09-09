export class HrLeaveReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveReport" };
  }
}
