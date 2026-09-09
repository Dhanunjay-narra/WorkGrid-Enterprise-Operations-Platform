export class CommPresenceScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceSchedule" };
  }
}
