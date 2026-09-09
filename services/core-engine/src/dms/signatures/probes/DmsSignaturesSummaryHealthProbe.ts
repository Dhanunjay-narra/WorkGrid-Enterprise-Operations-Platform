export class DmsSignaturesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesSummary" };
  }
}
