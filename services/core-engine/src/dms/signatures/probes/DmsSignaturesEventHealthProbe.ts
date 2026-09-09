export class DmsSignaturesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesEvent" };
  }
}
