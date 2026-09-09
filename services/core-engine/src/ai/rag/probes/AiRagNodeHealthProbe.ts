export class AiRagNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagNode" };
  }
}
