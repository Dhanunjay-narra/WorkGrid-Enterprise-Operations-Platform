export type HrShiftsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsSnapshotStateMachine {
  private allowedTransitions: Record<HrShiftsSnapshotState, HrShiftsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsSnapshotState, to: HrShiftsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsSnapshotState, to: HrShiftsSnapshotState): HrShiftsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
