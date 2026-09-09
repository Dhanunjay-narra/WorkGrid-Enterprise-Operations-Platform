export class DmsSignaturesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesNode" };
  }
}
