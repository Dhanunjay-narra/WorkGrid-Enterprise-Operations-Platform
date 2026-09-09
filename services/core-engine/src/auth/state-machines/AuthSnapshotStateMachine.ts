export type AuthSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthSnapshotStateMachine {
  private allowedTransitions: Record<AuthSnapshotState, AuthSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthSnapshotState, to: AuthSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthSnapshotState, to: AuthSnapshotState): AuthSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
