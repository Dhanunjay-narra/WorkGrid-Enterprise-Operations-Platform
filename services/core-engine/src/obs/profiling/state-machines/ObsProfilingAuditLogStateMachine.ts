export type ObsProfilingAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingAuditLogStateMachine {
  private allowedTransitions: Record<ObsProfilingAuditLogState, ObsProfilingAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingAuditLogState, to: ObsProfilingAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingAuditLogState, to: ObsProfilingAuditLogState): ObsProfilingAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
