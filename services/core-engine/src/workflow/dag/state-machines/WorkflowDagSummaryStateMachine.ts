export type WorkflowDagSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagSummaryStateMachine {
  private allowedTransitions: Record<WorkflowDagSummaryState, WorkflowDagSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagSummaryState, to: WorkflowDagSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagSummaryState, to: WorkflowDagSummaryState): WorkflowDagSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagSummary: " + from + " -> " + to);
    }
    return to;
  }
}
