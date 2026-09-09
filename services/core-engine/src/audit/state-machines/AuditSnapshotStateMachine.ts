export type AuditSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditSnapshotStateMachine {
  private allowedTransitions: Record<AuditSnapshotState, AuditSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditSnapshotState, to: AuditSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditSnapshotState, to: AuditSnapshotState): AuditSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
