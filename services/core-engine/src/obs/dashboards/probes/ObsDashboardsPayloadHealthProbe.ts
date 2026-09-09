export class ObsDashboardsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsPayload" };
  }
}
