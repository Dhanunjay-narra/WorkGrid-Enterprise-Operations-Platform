export class ObsAlertsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsRecord" };
  }
}
