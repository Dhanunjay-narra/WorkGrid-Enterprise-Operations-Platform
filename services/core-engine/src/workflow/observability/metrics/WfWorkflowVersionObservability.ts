export class WfWorkflowVersionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_workflowversion_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
