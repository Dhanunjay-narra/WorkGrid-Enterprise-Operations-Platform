export type FinVendorBillState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinVendorBillStateMachine {
  private validTransitions: Record<FinVendorBillState, FinVendorBillState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinVendorBillState, next: FinVendorBillState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinVendorBillState, next: FinVendorBillState): FinVendorBillState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinVendorBill: from " + current + " to " + next);
    }
    return next;
  }
}
