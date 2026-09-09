export type HrLeaveSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveSnapshotStateMachine {
  private allowedTransitions: Record<HrLeaveSnapshotState, HrLeaveSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveSnapshotState, to: HrLeaveSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveSnapshotState, to: HrLeaveSnapshotState): HrLeaveSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
