export type FinanceTaxesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesEventStateMachine {
  private allowedTransitions: Record<FinanceTaxesEventState, FinanceTaxesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesEventState, to: FinanceTaxesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesEventState, to: FinanceTaxesEventState): FinanceTaxesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
