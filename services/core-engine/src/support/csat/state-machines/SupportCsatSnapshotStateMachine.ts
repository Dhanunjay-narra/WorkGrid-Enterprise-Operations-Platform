export type SupportCsatSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatSnapshotStateMachine {
  private allowedTransitions: Record<SupportCsatSnapshotState, SupportCsatSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatSnapshotState, to: SupportCsatSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatSnapshotState, to: SupportCsatSnapshotState): SupportCsatSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
