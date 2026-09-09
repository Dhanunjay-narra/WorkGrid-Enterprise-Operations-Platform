export type CrmPipelineAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineAuditLogStateMachine {
  private allowedTransitions: Record<CrmPipelineAuditLogState, CrmPipelineAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineAuditLogState, to: CrmPipelineAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineAuditLogState, to: CrmPipelineAuditLogState): CrmPipelineAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
