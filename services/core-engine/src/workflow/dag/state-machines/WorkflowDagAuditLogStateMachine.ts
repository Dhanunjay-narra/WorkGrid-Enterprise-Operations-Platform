export type WorkflowDagAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowDagAuditLogStateMachine {
  private allowedTransitions: Record<WorkflowDagAuditLogState, WorkflowDagAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowDagAuditLogState, to: WorkflowDagAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowDagAuditLogState, to: WorkflowDagAuditLogState): WorkflowDagAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowDagAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
