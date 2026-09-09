export type DmsFoldersSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersSnapshotStateMachine {
  private allowedTransitions: Record<DmsFoldersSnapshotState, DmsFoldersSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersSnapshotState, to: DmsFoldersSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersSnapshotState, to: DmsFoldersSnapshotState): DmsFoldersSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
