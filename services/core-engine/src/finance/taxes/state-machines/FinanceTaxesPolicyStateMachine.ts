export type FinanceTaxesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesPolicyStateMachine {
  private allowedTransitions: Record<FinanceTaxesPolicyState, FinanceTaxesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesPolicyState, to: FinanceTaxesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesPolicyState, to: FinanceTaxesPolicyState): FinanceTaxesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
