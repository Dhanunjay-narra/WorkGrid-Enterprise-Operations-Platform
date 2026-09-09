export class DmsFilesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesEntry" };
  }
}
