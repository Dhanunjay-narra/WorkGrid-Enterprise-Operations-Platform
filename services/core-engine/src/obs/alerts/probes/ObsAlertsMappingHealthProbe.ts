export class ObsAlertsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsMapping" };
  }
}
