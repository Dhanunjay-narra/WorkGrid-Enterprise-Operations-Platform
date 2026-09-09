export type HrPayrollEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollEntryStateMachine {
  private allowedTransitions: Record<HrPayrollEntryState, HrPayrollEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollEntryState, to: HrPayrollEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollEntryState, to: HrPayrollEntryState): HrPayrollEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollEntry: " + from + " -> " + to);
    }
    return to;
  }
}
