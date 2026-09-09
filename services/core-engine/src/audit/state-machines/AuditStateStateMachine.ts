export type AuditStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditStateStateMachine {
  private allowedTransitions: Record<AuditStateState, AuditStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditStateState, to: AuditStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditStateState, to: AuditStateState): AuditStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditState: " + from + " -> " + to);
    }
    return to;
  }
}
