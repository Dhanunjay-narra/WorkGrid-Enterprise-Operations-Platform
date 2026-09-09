export type FinanceTreasurySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasurySessionStateMachine {
  private allowedTransitions: Record<FinanceTreasurySessionState, FinanceTreasurySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasurySessionState, to: FinanceTreasurySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasurySessionState, to: FinanceTreasurySessionState): FinanceTreasurySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasurySession: " + from + " -> " + to);
    }
    return to;
  }
}
