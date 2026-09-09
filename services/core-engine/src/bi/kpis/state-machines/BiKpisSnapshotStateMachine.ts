export type BiKpisSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisSnapshotStateMachine {
  private allowedTransitions: Record<BiKpisSnapshotState, BiKpisSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisSnapshotState, to: BiKpisSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisSnapshotState, to: BiKpisSnapshotState): BiKpisSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
