export type FinanceExpensesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesScheduleStateMachine {
  private allowedTransitions: Record<FinanceExpensesScheduleState, FinanceExpensesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesScheduleState, to: FinanceExpensesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesScheduleState, to: FinanceExpensesScheduleState): FinanceExpensesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
