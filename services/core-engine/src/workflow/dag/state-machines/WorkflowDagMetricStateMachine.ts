export type WorkflowDagMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagMetricStateMachine {
  private allowedTransitions: Record<WorkflowDagMetricState, WorkflowDagMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagMetricState, to: WorkflowDagMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagMetricState, to: WorkflowDagMetricState): WorkflowDagMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagMetric: " + from + " -> " + to);
    }
    return to;
  }
}
