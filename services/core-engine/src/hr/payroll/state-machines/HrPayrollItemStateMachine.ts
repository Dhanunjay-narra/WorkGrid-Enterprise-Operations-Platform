export type HrPayrollItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollItemStateMachine {
  private allowedTransitions: Record<HrPayrollItemState, HrPayrollItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollItemState, to: HrPayrollItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollItemState, to: HrPayrollItemState): HrPayrollItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollItem: " + from + " -> " + to);
    }
    return to;
  }
}
