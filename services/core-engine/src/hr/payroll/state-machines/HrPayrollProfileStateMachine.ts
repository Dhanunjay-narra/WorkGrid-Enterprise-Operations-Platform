export type HrPayrollProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollProfileStateMachine {
  private allowedTransitions: Record<HrPayrollProfileState, HrPayrollProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollProfileState, to: HrPayrollProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollProfileState, to: HrPayrollProfileState): HrPayrollProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollProfile: " + from + " -> " + to);
    }
    return to;
  }
}
