export type HrEmployeesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesTransactionStateMachine {
  private allowedTransitions: Record<HrEmployeesTransactionState, HrEmployeesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesTransactionState, to: HrEmployeesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesTransactionState, to: HrEmployeesTransactionState): HrEmployeesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
