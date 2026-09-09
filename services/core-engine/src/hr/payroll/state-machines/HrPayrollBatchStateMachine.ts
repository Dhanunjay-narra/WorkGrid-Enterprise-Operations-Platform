export type HrPayrollBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollBatchStateMachine {
  private allowedTransitions: Record<HrPayrollBatchState, HrPayrollBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollBatchState, to: HrPayrollBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollBatchState, to: HrPayrollBatchState): HrPayrollBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollBatch: " + from + " -> " + to);
    }
    return to;
  }
}
