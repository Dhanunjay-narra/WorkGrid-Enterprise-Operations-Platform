export class AiPromptsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsReport" };
  }
}
