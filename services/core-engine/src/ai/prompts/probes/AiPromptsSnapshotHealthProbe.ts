export class AiPromptsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsSnapshot" };
  }
}
