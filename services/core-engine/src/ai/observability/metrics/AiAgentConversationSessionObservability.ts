export class AiAgentConversationSessionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_ai_agentconversationsession_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
