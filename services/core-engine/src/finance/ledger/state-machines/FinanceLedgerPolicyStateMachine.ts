export type FinanceLedgerPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerPolicyStateMachine {
  private allowedTransitions: Record<FinanceLedgerPolicyState, FinanceLedgerPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerPolicyState, to: FinanceLedgerPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerPolicyState, to: FinanceLedgerPolicyState): FinanceLedgerPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
