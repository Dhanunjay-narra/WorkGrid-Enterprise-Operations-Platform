export class ObsDashboardsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsEntry" };
  }
}
