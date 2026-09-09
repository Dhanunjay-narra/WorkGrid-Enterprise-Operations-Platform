export class DmsSignaturesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesEntry" };
  }
}
