export class DmsRetentionScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionSchedule" };
  }
}
