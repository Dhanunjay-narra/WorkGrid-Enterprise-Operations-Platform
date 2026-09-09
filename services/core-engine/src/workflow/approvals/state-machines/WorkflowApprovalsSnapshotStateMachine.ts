export type WorkflowApprovalsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowApprovalsSnapshotStateMachine {
  private allowedTransitions: Record<WorkflowApprovalsSnapshotState, WorkflowApprovalsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowApprovalsSnapshotState, to: WorkflowApprovalsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowApprovalsSnapshotState, to: WorkflowApprovalsSnapshotState): WorkflowApprovalsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowApprovalsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
