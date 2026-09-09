export class ObsAlertsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsTransaction" };
  }
}
