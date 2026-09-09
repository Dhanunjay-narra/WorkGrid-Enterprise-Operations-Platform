export type BiQueriesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesSnapshotStateMachine {
  private allowedTransitions: Record<BiQueriesSnapshotState, BiQueriesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesSnapshotState, to: BiQueriesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesSnapshotState, to: BiQueriesSnapshotState): BiQueriesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
