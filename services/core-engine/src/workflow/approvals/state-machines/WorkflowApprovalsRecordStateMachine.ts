export type WorkflowApprovalsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowApprovalsRecordStateMachine {
  private allowedTransitions: Record<WorkflowApprovalsRecordState, WorkflowApprovalsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowApprovalsRecordState, to: WorkflowApprovalsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowApprovalsRecordState, to: WorkflowApprovalsRecordState): WorkflowApprovalsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowApprovalsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
