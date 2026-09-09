export type HrAttendanceBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceBatchStateMachine {
  private allowedTransitions: Record<HrAttendanceBatchState, HrAttendanceBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceBatchState, to: HrAttendanceBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceBatchState, to: HrAttendanceBatchState): HrAttendanceBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceBatch: " + from + " -> " + to);
    }
    return to;
  }
}
