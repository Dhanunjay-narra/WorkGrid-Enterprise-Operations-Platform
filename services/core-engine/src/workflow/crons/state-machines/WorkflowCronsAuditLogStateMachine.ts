export type WorkflowCronsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowCronsAuditLogStateMachine {
  private allowedTransitions: Record<WorkflowCronsAuditLogState, WorkflowCronsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowCronsAuditLogState, to: WorkflowCronsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowCronsAuditLogState, to: WorkflowCronsAuditLogState): WorkflowCronsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowCronsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
