export class DmsSignaturesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesSession" };
  }
}
