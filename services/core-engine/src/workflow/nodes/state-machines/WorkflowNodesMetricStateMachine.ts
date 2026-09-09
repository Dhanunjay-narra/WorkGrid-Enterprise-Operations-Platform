export type WorkflowNodesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesMetricStateMachine {
  private allowedTransitions: Record<WorkflowNodesMetricState, WorkflowNodesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesMetricState, to: WorkflowNodesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesMetricState, to: WorkflowNodesMetricState): WorkflowNodesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
