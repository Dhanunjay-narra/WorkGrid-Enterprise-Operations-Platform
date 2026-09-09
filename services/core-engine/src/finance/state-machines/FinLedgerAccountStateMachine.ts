export type FinLedgerAccountState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinLedgerAccountStateMachine {
  private validTransitions: Record<FinLedgerAccountState, FinLedgerAccountState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinLedgerAccountState, next: FinLedgerAccountState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinLedgerAccountState, next: FinLedgerAccountState): FinLedgerAccountState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinLedgerAccount: from " + current + " to " + next);
    }
    return next;
  }
}
