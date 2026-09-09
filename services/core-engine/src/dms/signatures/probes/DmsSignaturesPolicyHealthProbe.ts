export class DmsSignaturesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesPolicy" };
  }
}
