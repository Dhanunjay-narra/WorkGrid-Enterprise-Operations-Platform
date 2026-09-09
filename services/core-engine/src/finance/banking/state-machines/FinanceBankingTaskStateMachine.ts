export type FinanceBankingTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingTaskStateMachine {
  private allowedTransitions: Record<FinanceBankingTaskState, FinanceBankingTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingTaskState, to: FinanceBankingTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingTaskState, to: FinanceBankingTaskState): FinanceBankingTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingTask: " + from + " -> " + to);
    }
    return to;
  }
}
