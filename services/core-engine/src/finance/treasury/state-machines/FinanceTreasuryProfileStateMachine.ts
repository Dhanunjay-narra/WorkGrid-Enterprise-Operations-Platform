export type FinanceTreasuryProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasuryProfileStateMachine {
  private allowedTransitions: Record<FinanceTreasuryProfileState, FinanceTreasuryProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasuryProfileState, to: FinanceTreasuryProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasuryProfileState, to: FinanceTreasuryProfileState): FinanceTreasuryProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasuryProfile: " + from + " -> " + to);
    }
    return to;
  }
}
