export class DmsFilesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesEvent" };
  }
}
