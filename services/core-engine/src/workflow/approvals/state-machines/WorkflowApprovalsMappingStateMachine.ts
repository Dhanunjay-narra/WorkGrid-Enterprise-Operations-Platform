export type WorkflowApprovalsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowApprovalsMappingStateMachine {
  private allowedTransitions: Record<WorkflowApprovalsMappingState, WorkflowApprovalsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowApprovalsMappingState, to: WorkflowApprovalsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowApprovalsMappingState, to: WorkflowApprovalsMappingState): WorkflowApprovalsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowApprovalsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
