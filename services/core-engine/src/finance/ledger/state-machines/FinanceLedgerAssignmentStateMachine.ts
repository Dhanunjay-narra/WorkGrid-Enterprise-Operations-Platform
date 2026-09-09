export type FinanceLedgerAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerAssignmentStateMachine {
  private allowedTransitions: Record<FinanceLedgerAssignmentState, FinanceLedgerAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerAssignmentState, to: FinanceLedgerAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerAssignmentState, to: FinanceLedgerAssignmentState): FinanceLedgerAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
