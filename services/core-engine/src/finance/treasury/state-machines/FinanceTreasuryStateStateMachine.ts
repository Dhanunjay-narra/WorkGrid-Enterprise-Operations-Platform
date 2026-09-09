export type FinanceTreasuryStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasuryStateStateMachine {
  private allowedTransitions: Record<FinanceTreasuryStateState, FinanceTreasuryStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasuryStateState, to: FinanceTreasuryStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasuryStateState, to: FinanceTreasuryStateState): FinanceTreasuryStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasuryState: " + from + " -> " + to);
    }
    return to;
  }
}
