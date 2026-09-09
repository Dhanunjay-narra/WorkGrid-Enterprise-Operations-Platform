export type WorkflowExecutionsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowExecutionsSnapshotStateMachine {
  private allowedTransitions: Record<WorkflowExecutionsSnapshotState, WorkflowExecutionsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowExecutionsSnapshotState, to: WorkflowExecutionsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowExecutionsSnapshotState, to: WorkflowExecutionsSnapshotState): WorkflowExecutionsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowExecutionsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
