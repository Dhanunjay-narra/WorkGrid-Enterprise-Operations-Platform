export type IdAuditTrailState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdAuditTrailStateMachine {
  private validTransitions: Record<IdAuditTrailState, IdAuditTrailState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdAuditTrailState, next: IdAuditTrailState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdAuditTrailState, next: IdAuditTrailState): IdAuditTrailState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdAuditTrail: from " + current + " to " + next);
    }
    return next;
  }
}
