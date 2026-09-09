export class AiAgentsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsSchedule" };
  }
}
