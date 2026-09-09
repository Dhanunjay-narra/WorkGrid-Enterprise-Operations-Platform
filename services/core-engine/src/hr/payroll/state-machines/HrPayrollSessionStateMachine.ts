export type HrPayrollSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollSessionStateMachine {
  private allowedTransitions: Record<HrPayrollSessionState, HrPayrollSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollSessionState, to: HrPayrollSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollSessionState, to: HrPayrollSessionState): HrPayrollSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollSession: " + from + " -> " + to);
    }
    return to;
  }
}
