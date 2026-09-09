export type BiAnomaliesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesSnapshotStateMachine {
  private allowedTransitions: Record<BiAnomaliesSnapshotState, BiAnomaliesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesSnapshotState, to: BiAnomaliesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesSnapshotState, to: BiAnomaliesSnapshotState): BiAnomaliesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
