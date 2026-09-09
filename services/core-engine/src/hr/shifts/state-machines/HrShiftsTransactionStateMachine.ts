export type HrShiftsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsTransactionStateMachine {
  private allowedTransitions: Record<HrShiftsTransactionState, HrShiftsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsTransactionState, to: HrShiftsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsTransactionState, to: HrShiftsTransactionState): HrShiftsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
