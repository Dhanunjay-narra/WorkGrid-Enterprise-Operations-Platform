export type ObsProbesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesAuditLogStateMachine {
  private allowedTransitions: Record<ObsProbesAuditLogState, ObsProbesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesAuditLogState, to: ObsProbesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesAuditLogState, to: ObsProbesAuditLogState): ObsProbesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
