export type HrPayrollRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollRecordStateMachine {
  private allowedTransitions: Record<HrPayrollRecordState, HrPayrollRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollRecordState, to: HrPayrollRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollRecordState, to: HrPayrollRecordState): HrPayrollRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollRecord: " + from + " -> " + to);
    }
    return to;
  }
}
