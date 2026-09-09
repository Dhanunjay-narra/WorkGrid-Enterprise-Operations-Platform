export type BiCohortsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsAuditLogStateMachine {
  private allowedTransitions: Record<BiCohortsAuditLogState, BiCohortsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsAuditLogState, to: BiCohortsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsAuditLogState, to: BiCohortsAuditLogState): BiCohortsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
