export type FinRefundRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinRefundRecordStateMachine {
  private validTransitions: Record<FinRefundRecordState, FinRefundRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinRefundRecordState, next: FinRefundRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinRefundRecordState, next: FinRefundRecordState): FinRefundRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinRefundRecord: from " + current + " to " + next);
    }
    return next;
  }
}
