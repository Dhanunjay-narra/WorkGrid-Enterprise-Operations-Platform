export class WfWorkflowExecutionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_workflowexecution_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
