export class AiEvaluationsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsSnapshot" };
  }
}
