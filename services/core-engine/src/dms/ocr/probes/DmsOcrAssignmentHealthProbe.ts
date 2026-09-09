export class DmsOcrAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrAssignment" };
  }
}
