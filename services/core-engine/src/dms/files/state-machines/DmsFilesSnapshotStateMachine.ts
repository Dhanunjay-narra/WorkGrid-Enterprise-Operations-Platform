export type DmsFilesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFilesSnapshotStateMachine {
  private allowedTransitions: Record<DmsFilesSnapshotState, DmsFilesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFilesSnapshotState, to: DmsFilesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFilesSnapshotState, to: DmsFilesSnapshotState): DmsFilesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFilesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
