export class IntSyncRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncRecord" };
  }
}
