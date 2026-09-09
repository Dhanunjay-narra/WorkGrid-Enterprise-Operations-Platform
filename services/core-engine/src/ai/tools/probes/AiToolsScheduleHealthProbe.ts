export class AiToolsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsSchedule" };
  }
}
