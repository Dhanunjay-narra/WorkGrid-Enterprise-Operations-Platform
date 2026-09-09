export class AiRagPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagPolicy" };
  }
}
