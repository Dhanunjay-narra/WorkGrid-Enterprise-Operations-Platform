export type FinanceTaxesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesSessionStateMachine {
  private allowedTransitions: Record<FinanceTaxesSessionState, FinanceTaxesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesSessionState, to: FinanceTaxesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesSessionState, to: FinanceTaxesSessionState): FinanceTaxesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesSession: " + from + " -> " + to);
    }
    return to;
  }
}
