export type HrPayrollEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollEventStateMachine {
  private allowedTransitions: Record<HrPayrollEventState, HrPayrollEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollEventState, to: HrPayrollEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollEventState, to: HrPayrollEventState): HrPayrollEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollEvent: " + from + " -> " + to);
    }
    return to;
  }
}
