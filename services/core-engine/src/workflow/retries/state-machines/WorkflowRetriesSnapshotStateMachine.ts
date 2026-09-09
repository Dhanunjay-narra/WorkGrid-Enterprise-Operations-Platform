export type WorkflowRetriesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowRetriesSnapshotStateMachine {
  private allowedTransitions: Record<WorkflowRetriesSnapshotState, WorkflowRetriesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowRetriesSnapshotState, to: WorkflowRetriesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowRetriesSnapshotState, to: WorkflowRetriesSnapshotState): WorkflowRetriesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowRetriesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
