export type WorkflowDagSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagSnapshotStateMachine {
  private allowedTransitions: Record<WorkflowDagSnapshotState, WorkflowDagSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagSnapshotState, to: WorkflowDagSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagSnapshotState, to: WorkflowDagSnapshotState): WorkflowDagSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
