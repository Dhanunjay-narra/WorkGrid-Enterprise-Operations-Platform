export type CrmDealsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsSnapshotStateMachine {
  private allowedTransitions: Record<CrmDealsSnapshotState, CrmDealsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsSnapshotState, to: CrmDealsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsSnapshotState, to: CrmDealsSnapshotState): CrmDealsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
