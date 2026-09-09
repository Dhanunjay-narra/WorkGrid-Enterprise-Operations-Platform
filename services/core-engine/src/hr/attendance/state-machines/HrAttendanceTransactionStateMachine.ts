export type HrAttendanceTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceTransactionStateMachine {
  private allowedTransitions: Record<HrAttendanceTransactionState, HrAttendanceTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceTransactionState, to: HrAttendanceTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceTransactionState, to: HrAttendanceTransactionState): HrAttendanceTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
