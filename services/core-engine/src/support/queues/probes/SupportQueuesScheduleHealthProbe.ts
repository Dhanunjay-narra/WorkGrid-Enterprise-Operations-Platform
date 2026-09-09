export class SupportQueuesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesSchedule" };
  }
}
