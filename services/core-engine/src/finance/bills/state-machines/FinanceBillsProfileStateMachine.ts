export type FinanceBillsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsProfileStateMachine {
  private allowedTransitions: Record<FinanceBillsProfileState, FinanceBillsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsProfileState, to: FinanceBillsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsProfileState, to: FinanceBillsProfileState): FinanceBillsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
