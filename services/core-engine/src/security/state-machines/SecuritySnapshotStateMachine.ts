export type SecuritySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecuritySnapshotStateMachine {
  private allowedTransitions: Record<SecuritySnapshotState, SecuritySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecuritySnapshotState, to: SecuritySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecuritySnapshotState, to: SecuritySnapshotState): SecuritySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecuritySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
