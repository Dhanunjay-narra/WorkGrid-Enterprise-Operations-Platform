export type ProjectRisksAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksAuditLogStateMachine {
  private allowedTransitions: Record<ProjectRisksAuditLogState, ProjectRisksAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksAuditLogState, to: ProjectRisksAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksAuditLogState, to: ProjectRisksAuditLogState): ProjectRisksAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
