export class AuditScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditSchedule" };
  }
}
