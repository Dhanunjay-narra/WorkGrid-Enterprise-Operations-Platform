export class PrjSprintRetrospectiveObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_sprintretrospective_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
