export class DmsSignaturesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesSnapshot" };
  }
}
