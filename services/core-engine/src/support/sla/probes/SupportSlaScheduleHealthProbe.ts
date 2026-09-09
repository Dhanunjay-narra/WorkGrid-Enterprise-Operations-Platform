export class SupportSlaScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaSchedule" };
  }
}
