export type BiWidgetsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsSnapshotStateMachine {
  private allowedTransitions: Record<BiWidgetsSnapshotState, BiWidgetsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsSnapshotState, to: BiWidgetsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsSnapshotState, to: BiWidgetsSnapshotState): BiWidgetsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
