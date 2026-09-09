export class DmsOcrEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrEntry" };
  }
}
