export type HrDepartmentsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsTransactionStateMachine {
  private allowedTransitions: Record<HrDepartmentsTransactionState, HrDepartmentsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsTransactionState, to: HrDepartmentsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsTransactionState, to: HrDepartmentsTransactionState): HrDepartmentsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
