export class DmsSignaturesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesAssignment" };
  }
}
