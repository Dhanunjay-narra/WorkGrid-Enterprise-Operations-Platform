export class AiMemoryPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryPolicy" };
  }
}
