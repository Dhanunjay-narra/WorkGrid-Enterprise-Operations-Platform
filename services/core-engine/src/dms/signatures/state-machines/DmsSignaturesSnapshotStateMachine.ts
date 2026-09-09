export type DmsSignaturesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesSnapshotStateMachine {
  private allowedTransitions: Record<DmsSignaturesSnapshotState, DmsSignaturesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesSnapshotState, to: DmsSignaturesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesSnapshotState, to: DmsSignaturesSnapshotState): DmsSignaturesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
