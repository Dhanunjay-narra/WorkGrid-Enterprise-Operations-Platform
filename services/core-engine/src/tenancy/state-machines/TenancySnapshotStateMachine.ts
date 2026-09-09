export type TenancySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancySnapshotStateMachine {
  private allowedTransitions: Record<TenancySnapshotState, TenancySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancySnapshotState, to: TenancySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancySnapshotState, to: TenancySnapshotState): TenancySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
