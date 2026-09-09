export type FinanceBankingThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingThresholdStateMachine {
  private allowedTransitions: Record<FinanceBankingThresholdState, FinanceBankingThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingThresholdState, to: FinanceBankingThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingThresholdState, to: FinanceBankingThresholdState): FinanceBankingThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
