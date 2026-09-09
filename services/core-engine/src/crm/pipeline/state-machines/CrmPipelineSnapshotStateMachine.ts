export type CrmPipelineSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineSnapshotStateMachine {
  private allowedTransitions: Record<CrmPipelineSnapshotState, CrmPipelineSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineSnapshotState, to: CrmPipelineSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineSnapshotState, to: CrmPipelineSnapshotState): CrmPipelineSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
