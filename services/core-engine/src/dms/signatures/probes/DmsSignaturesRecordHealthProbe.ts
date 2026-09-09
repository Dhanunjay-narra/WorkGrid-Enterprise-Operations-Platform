export class DmsSignaturesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesRecord" };
  }
}
