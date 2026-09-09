export type AuditSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditSessionStateMachine {
  private allowedTransitions: Record<AuditSessionState, AuditSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditSessionState, to: AuditSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditSessionState, to: AuditSessionState): AuditSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditSession: " + from + " -> " + to);
    }
    return to;
  }
}
