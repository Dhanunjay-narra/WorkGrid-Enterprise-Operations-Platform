export type FinGeneralLedgerState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinGeneralLedgerStateMachine {
  private validTransitions: Record<FinGeneralLedgerState, FinGeneralLedgerState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinGeneralLedgerState, next: FinGeneralLedgerState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinGeneralLedgerState, next: FinGeneralLedgerState): FinGeneralLedgerState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinGeneralLedger: from " + current + " to " + next);
    }
    return next;
  }
}
