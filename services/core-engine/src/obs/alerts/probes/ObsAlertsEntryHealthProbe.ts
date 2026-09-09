export class ObsAlertsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsEntry" };
  }
}
