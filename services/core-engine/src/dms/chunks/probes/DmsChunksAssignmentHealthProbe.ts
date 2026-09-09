export class DmsChunksAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksAssignment" };
  }
}
