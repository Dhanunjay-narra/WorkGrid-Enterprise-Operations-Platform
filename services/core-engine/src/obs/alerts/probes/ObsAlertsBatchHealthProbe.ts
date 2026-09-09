export class ObsAlertsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsBatch" };
  }
}
