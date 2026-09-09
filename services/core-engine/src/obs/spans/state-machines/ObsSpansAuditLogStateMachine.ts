export type ObsSpansAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansAuditLogStateMachine {
  private allowedTransitions: Record<ObsSpansAuditLogState, ObsSpansAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansAuditLogState, to: ObsSpansAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansAuditLogState, to: ObsSpansAuditLogState): ObsSpansAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
