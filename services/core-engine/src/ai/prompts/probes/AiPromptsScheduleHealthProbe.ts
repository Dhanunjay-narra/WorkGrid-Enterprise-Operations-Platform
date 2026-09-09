export class AiPromptsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsSchedule" };
  }
}
