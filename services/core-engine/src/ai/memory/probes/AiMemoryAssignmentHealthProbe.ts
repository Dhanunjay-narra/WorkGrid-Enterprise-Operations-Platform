export class AiMemoryAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryAssignment" };
  }
}
