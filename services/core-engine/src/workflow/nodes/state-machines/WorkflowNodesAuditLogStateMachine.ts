export type WorkflowNodesAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class WorkflowNodesAuditLogStateMachine {
  private allowedTransitions: Record<WorkflowNodesAuditLogState, WorkflowNodesAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: WorkflowNodesAuditLogState, to: WorkflowNodesAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: WorkflowNodesAuditLogState, to: WorkflowNodesAuditLogState): WorkflowNodesAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for WorkflowNodesAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
