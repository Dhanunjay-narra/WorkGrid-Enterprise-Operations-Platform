export type ProjectTasksAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksAuditLogStateMachine {
  private allowedTransitions: Record<ProjectTasksAuditLogState, ProjectTasksAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksAuditLogState, to: ProjectTasksAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksAuditLogState, to: ProjectTasksAuditLogState): ProjectTasksAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
