export type FinanceTaxesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesStateStateMachine {
  private allowedTransitions: Record<FinanceTaxesStateState, FinanceTaxesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesStateState, to: FinanceTaxesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesStateState, to: FinanceTaxesStateState): FinanceTaxesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesState: " + from + " -> " + to);
    }
    return to;
  }
}
