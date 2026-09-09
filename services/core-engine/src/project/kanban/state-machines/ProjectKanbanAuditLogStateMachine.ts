export type ProjectKanbanAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanAuditLogStateMachine {
  private allowedTransitions: Record<ProjectKanbanAuditLogState, ProjectKanbanAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanAuditLogState, to: ProjectKanbanAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanAuditLogState, to: ProjectKanbanAuditLogState): ProjectKanbanAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
