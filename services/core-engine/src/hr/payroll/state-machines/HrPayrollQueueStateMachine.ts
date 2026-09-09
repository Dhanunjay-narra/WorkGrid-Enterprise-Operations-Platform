export type HrPayrollQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollQueueStateMachine {
  private allowedTransitions: Record<HrPayrollQueueState, HrPayrollQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollQueueState, to: HrPayrollQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollQueueState, to: HrPayrollQueueState): HrPayrollQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollQueue: " + from + " -> " + to);
    }
    return to;
  }
}
