export type FinanceExpensesReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesReportStateMachine {
  private allowedTransitions: Record<FinanceExpensesReportState, FinanceExpensesReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesReportState, to: FinanceExpensesReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesReportState, to: FinanceExpensesReportState): FinanceExpensesReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesReport: " + from + " -> " + to);
    }
    return to;
  }
}
