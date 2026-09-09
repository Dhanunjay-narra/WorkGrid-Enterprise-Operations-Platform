export type AuditProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditProfileStateMachine {
  private allowedTransitions: Record<AuditProfileState, AuditProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditProfileState, to: AuditProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditProfileState, to: AuditProfileState): AuditProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditProfile: " + from + " -> " + to);
    }
    return to;
  }
}
