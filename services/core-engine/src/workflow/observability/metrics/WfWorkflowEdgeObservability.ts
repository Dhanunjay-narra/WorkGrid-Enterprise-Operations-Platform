export class WfWorkflowEdgeObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_workflowedge_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
