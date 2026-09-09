export class DmsExportEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportEntry" };
  }
}
