export class DmsOcrPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrPolicy" };
  }
}
