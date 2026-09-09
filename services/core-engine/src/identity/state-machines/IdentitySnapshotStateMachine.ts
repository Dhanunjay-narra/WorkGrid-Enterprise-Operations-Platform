export type IdentitySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentitySnapshotStateMachine {
  private allowedTransitions: Record<IdentitySnapshotState, IdentitySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentitySnapshotState, to: IdentitySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentitySnapshotState, to: IdentitySnapshotState): IdentitySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentitySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
