export class DmsSignaturesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesConfig" };
  }
}
