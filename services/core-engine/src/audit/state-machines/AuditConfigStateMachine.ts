export type AuditConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditConfigStateMachine {
  private allowedTransitions: Record<AuditConfigState, AuditConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditConfigState, to: AuditConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditConfigState, to: AuditConfigState): AuditConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditConfig: " + from + " -> " + to);
    }
    return to;
  }
}
