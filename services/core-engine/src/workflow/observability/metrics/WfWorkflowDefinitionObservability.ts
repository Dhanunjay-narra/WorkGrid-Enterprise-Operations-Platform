export class WfWorkflowDefinitionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_workflowdefinition_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
