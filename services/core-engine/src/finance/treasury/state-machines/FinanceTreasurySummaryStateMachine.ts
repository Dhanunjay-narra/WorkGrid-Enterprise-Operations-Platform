export type FinanceTreasurySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasurySummaryStateMachine {
  private allowedTransitions: Record<FinanceTreasurySummaryState, FinanceTreasurySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasurySummaryState, to: FinanceTreasurySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasurySummaryState, to: FinanceTreasurySummaryState): FinanceTreasurySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasurySummary: " + from + " -> " + to);
    }
    return to;
  }
}
