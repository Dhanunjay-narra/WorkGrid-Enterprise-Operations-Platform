export type HrPayrollTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollTaskStateMachine {
  private allowedTransitions: Record<HrPayrollTaskState, HrPayrollTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollTaskState, to: HrPayrollTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollTaskState, to: HrPayrollTaskState): HrPayrollTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollTask: " + from + " -> " + to);
    }
    return to;
  }
}
