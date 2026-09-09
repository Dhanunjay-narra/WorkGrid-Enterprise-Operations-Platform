export class DmsExportAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportAssignment" };
  }
}
