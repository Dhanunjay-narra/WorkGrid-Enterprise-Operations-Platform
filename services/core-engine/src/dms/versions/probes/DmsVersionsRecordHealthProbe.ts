export class DmsVersionsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsRecord" };
  }
}
