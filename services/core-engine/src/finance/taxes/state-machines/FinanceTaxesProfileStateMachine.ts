export type FinanceTaxesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesProfileStateMachine {
  private allowedTransitions: Record<FinanceTaxesProfileState, FinanceTaxesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesProfileState, to: FinanceTaxesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesProfileState, to: FinanceTaxesProfileState): FinanceTaxesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
