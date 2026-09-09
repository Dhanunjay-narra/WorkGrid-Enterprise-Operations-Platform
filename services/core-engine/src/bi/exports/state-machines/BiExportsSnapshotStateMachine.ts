export type BiExportsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsSnapshotStateMachine {
  private allowedTransitions: Record<BiExportsSnapshotState, BiExportsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsSnapshotState, to: BiExportsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsSnapshotState, to: BiExportsSnapshotState): BiExportsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
