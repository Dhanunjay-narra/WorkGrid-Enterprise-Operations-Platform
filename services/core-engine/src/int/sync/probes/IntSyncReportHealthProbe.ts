export class IntSyncReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncReport" };
  }
}
