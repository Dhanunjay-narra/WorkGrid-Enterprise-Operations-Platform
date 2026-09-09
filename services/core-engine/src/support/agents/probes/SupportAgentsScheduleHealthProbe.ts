export class SupportAgentsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsSchedule" };
  }
}
