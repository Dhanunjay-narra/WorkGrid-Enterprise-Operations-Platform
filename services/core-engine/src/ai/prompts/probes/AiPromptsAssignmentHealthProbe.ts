export class AiPromptsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsAssignment" };
  }
}
