export class WfExecutionStepMetricObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_executionstepmetric_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
