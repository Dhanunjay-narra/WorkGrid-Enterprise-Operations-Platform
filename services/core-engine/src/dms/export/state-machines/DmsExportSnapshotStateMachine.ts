export type DmsExportSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsExportSnapshotStateMachine {
  private allowedTransitions: Record<DmsExportSnapshotState, DmsExportSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsExportSnapshotState, to: DmsExportSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsExportSnapshotState, to: DmsExportSnapshotState): DmsExportSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsExportSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
