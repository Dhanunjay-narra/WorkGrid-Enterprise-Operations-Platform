export type FinanceTaxesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesEntryStateMachine {
  private allowedTransitions: Record<FinanceTaxesEntryState, FinanceTaxesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesEntryState, to: FinanceTaxesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesEntryState, to: FinanceTaxesEntryState): FinanceTaxesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
