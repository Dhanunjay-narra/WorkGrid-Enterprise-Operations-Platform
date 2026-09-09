export type InvStockAuditState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvStockAuditStateMachine {
  private validTransitions: Record<InvStockAuditState, InvStockAuditState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvStockAuditState, next: InvStockAuditState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvStockAuditState, next: InvStockAuditState): InvStockAuditState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvStockAudit: from " + current + " to " + next);
    }
    return next;
  }
}
