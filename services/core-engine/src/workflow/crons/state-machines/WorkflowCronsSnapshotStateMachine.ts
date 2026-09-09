export type WorkflowCronsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsSnapshotStateMachine {
  private allowedTransitions: Record<WorkflowCronsSnapshotState, WorkflowCronsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsSnapshotState, to: WorkflowCronsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsSnapshotState, to: WorkflowCronsSnapshotState): WorkflowCronsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
