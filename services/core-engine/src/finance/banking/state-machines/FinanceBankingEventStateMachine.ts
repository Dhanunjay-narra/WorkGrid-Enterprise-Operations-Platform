export type FinanceBankingEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingEventStateMachine {
  private allowedTransitions: Record<FinanceBankingEventState, FinanceBankingEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingEventState, to: FinanceBankingEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingEventState, to: FinanceBankingEventState): FinanceBankingEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingEvent: " + from + " -> " + to);
    }
    return to;
  }
}
