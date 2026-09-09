export type ProjectSprintsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsAuditLogStateMachine {
  private allowedTransitions: Record<ProjectSprintsAuditLogState, ProjectSprintsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsAuditLogState, to: ProjectSprintsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsAuditLogState, to: ProjectSprintsAuditLogState): ProjectSprintsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
