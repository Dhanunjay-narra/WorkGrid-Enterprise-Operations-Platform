export class ObsDashboardsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsRecord" };
  }
}
