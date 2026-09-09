export type FinanceBankingAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingAssignmentStateMachine {
  private allowedTransitions: Record<FinanceBankingAssignmentState, FinanceBankingAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingAssignmentState, to: FinanceBankingAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingAssignmentState, to: FinanceBankingAssignmentState): FinanceBankingAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
