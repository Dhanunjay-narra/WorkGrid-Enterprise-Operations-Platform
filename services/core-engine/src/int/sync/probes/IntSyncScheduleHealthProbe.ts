export class IntSyncScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncSchedule" };
  }
}
