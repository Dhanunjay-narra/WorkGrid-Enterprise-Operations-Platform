export type HrPayrollTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollTransactionStateMachine {
  private allowedTransitions: Record<HrPayrollTransactionState, HrPayrollTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollTransactionState, to: HrPayrollTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollTransactionState, to: HrPayrollTransactionState): HrPayrollTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
