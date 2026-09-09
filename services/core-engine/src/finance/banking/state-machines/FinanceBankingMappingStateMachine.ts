export type FinanceBankingMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingMappingStateMachine {
  private allowedTransitions: Record<FinanceBankingMappingState, FinanceBankingMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingMappingState, to: FinanceBankingMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingMappingState, to: FinanceBankingMappingState): FinanceBankingMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingMapping: " + from + " -> " + to);
    }
    return to;
  }
}
