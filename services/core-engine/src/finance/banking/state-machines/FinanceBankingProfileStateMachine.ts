export type FinanceBankingProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingProfileStateMachine {
  private allowedTransitions: Record<FinanceBankingProfileState, FinanceBankingProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingProfileState, to: FinanceBankingProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingProfileState, to: FinanceBankingProfileState): FinanceBankingProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingProfile: " + from + " -> " + to);
    }
    return to;
  }
}
