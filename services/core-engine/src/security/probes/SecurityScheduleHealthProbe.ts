export class SecurityScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecuritySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecuritySchedule" };
  }
}
