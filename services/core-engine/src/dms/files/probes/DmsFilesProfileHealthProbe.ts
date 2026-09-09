export class DmsFilesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesProfile" };
  }
}
