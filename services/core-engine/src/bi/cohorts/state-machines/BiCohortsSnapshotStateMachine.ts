export type BiCohortsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsSnapshotStateMachine {
  private allowedTransitions: Record<BiCohortsSnapshotState, BiCohortsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsSnapshotState, to: BiCohortsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsSnapshotState, to: BiCohortsSnapshotState): BiCohortsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
