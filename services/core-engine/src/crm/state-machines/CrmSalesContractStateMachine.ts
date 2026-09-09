export type CrmSalesContractState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmSalesContractStateMachine {
  private validTransitions: Record<CrmSalesContractState, CrmSalesContractState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmSalesContractState, next: CrmSalesContractState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmSalesContractState, next: CrmSalesContractState): CrmSalesContractState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmSalesContract: from " + current + " to " + next);
    }
    return next;
  }
}
