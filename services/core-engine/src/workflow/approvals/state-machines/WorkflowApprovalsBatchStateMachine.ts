export type WorkflowApprovalsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowApprovalsBatchStateMachine {
  private allowedTransitions: Record<WorkflowApprovalsBatchState, WorkflowApprovalsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowApprovalsBatchState, to: WorkflowApprovalsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowApprovalsBatchState, to: WorkflowApprovalsBatchState): WorkflowApprovalsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowApprovalsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
