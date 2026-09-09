export type WorkflowApprovalsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowApprovalsThresholdStateMachine {
  private allowedTransitions: Record<WorkflowApprovalsThresholdState, WorkflowApprovalsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowApprovalsThresholdState, to: WorkflowApprovalsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowApprovalsThresholdState, to: WorkflowApprovalsThresholdState): WorkflowApprovalsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowApprovalsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
