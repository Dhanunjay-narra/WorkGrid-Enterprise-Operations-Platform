export type FinanceBillsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsSummaryStateMachine {
  private allowedTransitions: Record<FinanceBillsSummaryState, FinanceBillsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsSummaryState, to: FinanceBillsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsSummaryState, to: FinanceBillsSummaryState): FinanceBillsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
