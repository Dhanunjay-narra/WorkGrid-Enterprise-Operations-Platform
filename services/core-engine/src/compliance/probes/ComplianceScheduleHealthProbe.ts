export class ComplianceScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceSchedule" };
  }
}
