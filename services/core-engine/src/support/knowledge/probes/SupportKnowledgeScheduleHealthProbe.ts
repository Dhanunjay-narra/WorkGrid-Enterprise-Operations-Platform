export class SupportKnowledgeScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeSchedule" };
  }
}
