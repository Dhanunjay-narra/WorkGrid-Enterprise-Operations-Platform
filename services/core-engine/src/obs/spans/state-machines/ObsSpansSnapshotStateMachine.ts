export type ObsSpansSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansSnapshotStateMachine {
  private allowedTransitions: Record<ObsSpansSnapshotState, ObsSpansSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansSnapshotState, to: ObsSpansSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansSnapshotState, to: ObsSpansSnapshotState): ObsSpansSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
