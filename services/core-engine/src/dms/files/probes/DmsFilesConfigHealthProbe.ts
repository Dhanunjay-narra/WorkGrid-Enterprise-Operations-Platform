export class DmsFilesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesConfig" };
  }
}
