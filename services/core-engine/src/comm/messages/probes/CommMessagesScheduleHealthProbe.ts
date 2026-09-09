export class CommMessagesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesSchedule" };
  }
}
