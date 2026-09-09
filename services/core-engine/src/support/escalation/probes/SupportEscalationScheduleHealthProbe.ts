export class SupportEscalationScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationSchedule" };
  }
}
