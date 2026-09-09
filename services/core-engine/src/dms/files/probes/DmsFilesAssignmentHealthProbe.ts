export class DmsFilesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesAssignment" };
  }
}
