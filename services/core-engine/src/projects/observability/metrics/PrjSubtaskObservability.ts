export class PrjSubtaskObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_subtask_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
