export type ObsTracingAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingAuditLogStateMachine {
  private allowedTransitions: Record<ObsTracingAuditLogState, ObsTracingAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingAuditLogState, to: ObsTracingAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingAuditLogState, to: ObsTracingAuditLogState): ObsTracingAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
