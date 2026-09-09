export type ProjectGanttAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttAuditLogStateMachine {
  private allowedTransitions: Record<ProjectGanttAuditLogState, ProjectGanttAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttAuditLogState, to: ProjectGanttAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttAuditLogState, to: ProjectGanttAuditLogState): ProjectGanttAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
