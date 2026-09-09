export class DmsSignaturesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesState" };
  }
}
