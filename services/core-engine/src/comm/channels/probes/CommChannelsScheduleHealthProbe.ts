export class CommChannelsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsSchedule" };
  }
}
