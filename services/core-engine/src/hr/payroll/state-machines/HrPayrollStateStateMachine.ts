export type HrPayrollStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollStateStateMachine {
  private allowedTransitions: Record<HrPayrollStateState, HrPayrollStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollStateState, to: HrPayrollStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollStateState, to: HrPayrollStateState): HrPayrollStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollState: " + from + " -> " + to);
    }
    return to;
  }
}
