export type FinanceTaxesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesItemStateMachine {
  private allowedTransitions: Record<FinanceTaxesItemState, FinanceTaxesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesItemState, to: FinanceTaxesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesItemState, to: FinanceTaxesItemState): FinanceTaxesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesItem: " + from + " -> " + to);
    }
    return to;
  }
}
