export type AuditThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuditThresholdStateMachine {
  private allowedTransitions: Record<AuditThresholdState, AuditThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuditThresholdState, to: AuditThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuditThresholdState, to: AuditThresholdState): AuditThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuditThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
