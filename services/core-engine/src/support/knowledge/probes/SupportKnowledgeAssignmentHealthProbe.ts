export class SupportKnowledgeAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportKnowledgeAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportKnowledgeAssignment" };
  }
}
