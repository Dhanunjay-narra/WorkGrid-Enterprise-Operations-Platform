export type FinanceTaxesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesThresholdStateMachine {
  private allowedTransitions: Record<FinanceTaxesThresholdState, FinanceTaxesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesThresholdState, to: FinanceTaxesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesThresholdState, to: FinanceTaxesThresholdState): FinanceTaxesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
