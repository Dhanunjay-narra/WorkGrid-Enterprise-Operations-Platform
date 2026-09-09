export class DmsOcrNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrNode" };
  }
}
