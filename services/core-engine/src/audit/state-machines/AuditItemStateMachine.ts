export type AuditItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditItemStateMachine {
  private allowedTransitions: Record<AuditItemState, AuditItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditItemState, to: AuditItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditItemState, to: AuditItemState): AuditItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditItem: " + from + " -> " + to);
    }
    return to;
  }
}
