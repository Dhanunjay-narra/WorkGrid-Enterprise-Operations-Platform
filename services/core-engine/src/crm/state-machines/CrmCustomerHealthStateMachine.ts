export type CrmCustomerHealthState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmCustomerHealthStateMachine {
  private validTransitions: Record<CrmCustomerHealthState, CrmCustomerHealthState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmCustomerHealthState, next: CrmCustomerHealthState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmCustomerHealthState, next: CrmCustomerHealthState): CrmCustomerHealthState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmCustomerHealth: from " + current + " to " + next);
    }
    return next;
  }
}
