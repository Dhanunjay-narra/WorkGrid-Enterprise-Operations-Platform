export type ComplianceSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceSnapshotStateMachine {
  private allowedTransitions: Record<ComplianceSnapshotState, ComplianceSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceSnapshotState, to: ComplianceSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceSnapshotState, to: ComplianceSnapshotState): ComplianceSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
