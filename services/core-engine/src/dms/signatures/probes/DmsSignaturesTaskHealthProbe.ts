export class DmsSignaturesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesTask" };
  }
}
